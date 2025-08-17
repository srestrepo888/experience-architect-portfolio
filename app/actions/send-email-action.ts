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

export async function sendEmailAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // Basic validation (example)
  if (!name || !email || !message) {
    return {
      message: "All fields are required.",
      status: "error",
      fields: { name, email, message },
      issues: ["Missing required fields."],
    }
  }
  if (!email.includes("@")) {
    return {
      message: "Invalid email address.",
      status: "error",
      fields: { name, email, message },
      issues: ["Invalid email format."],
    }
  }

  // Simulate API call / email sending
  console.log("Simulating email send:", { name, email, message })
  await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate network delay

  // Simulate a random success or failure for demonstration
  // In a real app, this would be based on the email sending service response
  if (Math.random() > 0.2) {
    // 80% success rate
    return {
      message: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
      status: "success",
    }
  } else {
    return {
      message: "Sorry, there was an error sending your message. Please try again later.",
      status: "error",
    }
  }
}
