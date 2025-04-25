import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    console.log("e", e);
    const templateParams = {
      to_name: "Ganesh",
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: "nrgane06@gmail.com",
    };

    emailjs
      .send(
        "service_n9bz0aw", // Your EmailJS service ID
        "template_3fntqnf", // Your EmailJS template ID
        templateParams,
        "Qq94shh5k2_3TZ659" // Your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email sent!");
          setIsSubmitting(false);
          setSubmitSuccess(true);

          // Reset form after success
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          // Hide success after 5s
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
        },
        (err) => {
          console.error("FAILED...", err);
          setIsSubmitting(false);
          setSubmitError("Email failed to send. Please try again.");
          alert("Email failed to send.");
        }
      );
  };

  return (
    <div className="rounded-lg bg-card p-6 shadow-md">
      {submitSuccess ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-md bg-green-500/10 p-4 text-green-600 dark:text-green-400"
        >
          <h3 className="text-lg font-semibold">Message Sent!</h3>
          <p>Thanks for reaching out. I'll get back to you soon.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="mb-2 block font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="mb-2 block font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {submitError && (
            <div className="mb-4 rounded-md bg-red-500/10 p-3 text-red-600 dark:text-red-400">
              {submitError}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
