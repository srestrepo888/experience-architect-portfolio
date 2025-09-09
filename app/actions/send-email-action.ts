"use server"

export interface FormState {
  message: string
  status: "success" | "error" | "idle"
  fields?: {
    name?: string
    email?: string
    message?: string
  }
  issues?: string[]
}

// Input sanitization utility
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 1000) // Limit length
}

// Enhanced email validation
function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email) && email.length <= 254
}

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(identifier: string): boolean {
  const now = Date.now()
  const limit = rateLimitStore.get(identifier)
  
  if (!limit || now > limit.resetTime) {
    rateLimitStore.set(identifier, { count: 1, resetTime: now + 60000 }) // 1 minute window
    return true
  }
  
  if (limit.count >= 3) { // Max 3 attempts per minute
    return false
  }
  
  limit.count++
  return true
}

export async function sendEmailAction(_prevState: FormState, formData: FormData): Promise<FormState> {
  try {
    const rawName = formData.get("name") as string
    const rawEmail = formData.get("email") as string  
    const rawMessage = formData.get("message") as string

    // Input validation and sanitization
    if (!rawName || !rawEmail || !rawMessage) {
      return {
        message: "All fields are required.",
        status: "error",
        fields: { name: rawName, email: rawEmail, message: rawMessage },
        issues: ["Missing required fields."],
      }
    }

    const name = sanitizeInput(rawName)
    const email = sanitizeInput(rawEmail)
    const message = sanitizeInput(rawMessage)

    // Enhanced validation
    if (name.length < 2 || name.length > 100) {
      return {
        message: "Name must be between 2 and 100 characters.",
        status: "error",
        fields: { name, email, message },
        issues: ["Invalid name length."],
      }
    }

    if (!validateEmail(email)) {
      return {
        message: "Please enter a valid email address.",
        status: "error",
        fields: { name, email, message },
        issues: ["Invalid email format."],
      }
    }

    if (message.length < 10 || message.length > 1000) {
      return {
        message: "Message must be between 10 and 1000 characters.",
        status: "error",
        fields: { name, email, message },
        issues: ["Invalid message length."],
      }
    }

    // Rate limiting check
    if (!checkRateLimit(email)) {
      return {
        message: "Too many attempts. Please wait a minute before trying again.",
        status: "error",
        fields: { name, email, message },
        issues: ["Rate limit exceeded."],
      }
    }

    // In production, replace with actual email service (SendGrid, Resend, etc.)
    console.log("Contact form submission:", { 
      name: name.substring(0, 50), // Log partial data only
      email: email.substring(0, 20),
      messageLength: message.length 
    })
    
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For demo purposes - in production, implement actual email sending
    return {
      message: "Thank you for your message! I'll get back to you within 24 hours.",
      status: "success",
    }

  } catch (error) {
    console.error("Contact form error:", error)
    return {
      message: "An unexpected error occurred. Please try again later.",
      status: "error",
    }
  }
}
