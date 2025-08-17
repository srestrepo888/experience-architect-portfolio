"use client"

import { useActionState, type FormEvent, useEffect, useRef } from "react" // Added useRef
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RefinedButton } from "@/components/ui/refined-button"
import { sendEmailAction, type FormState } from "@/app/actions/send-email-action"
import { HeadingSmall, BodyMedium } from "@/components/typography"
import { Loader2, CheckCircle, AlertTriangle } from "lucide-react"

const initialState: FormState = {
  message: "",
  status: "idle",
}

export default function ContactForm() {
  const [formState, formAction, isPending] = useActionState(sendEmailAction, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (formState.status === "success" && formRef.current) {
      formRef.current.reset()
    }
  }, [formState.status])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    formAction(formData)
  }

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <motion.div
        className="text-center mb-10 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <HeadingSmall as="h3" className="mb-2 text-foreground">
          Send a Message
        </HeadingSmall>
        <BodyMedium className="text-muted-foreground max-w-md mx-auto">
          Have a project in mind or just want to say hi? Fill out the form below and I&apos;ll get back to you.
        </BodyMedium>
      </motion.div>

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-6"
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1.5">
            Full Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your Name"
            className="bg-secondary border-border focus:ring-primary focus:border-primary"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1.5">
            Email Address
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            className="bg-secondary border-border focus:ring-primary focus:border-primary"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1.5">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Your message here..."
            className="bg-secondary border-border focus:ring-primary focus:border-primary"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <RefinedButton type="submit" disabled={isPending} className="w-full md:w-auto" variant="primary" size="lg">
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
              </>
            ) : (
              "Send Message"
            )}
          </RefinedButton>
        </motion.div>
      </motion.form>

      {formState?.message && formState.status !== "idle" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-6 p-4 rounded-md text-sm flex items-center ${
            formState.status === "success"
              ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-600"
              : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-600"
          }`}
        >
          {formState.status === "success" ? (
            <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          ) : (
            <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
          )}
          {formState.message}
        </motion.div>
      )}
    </div>
  )
}
