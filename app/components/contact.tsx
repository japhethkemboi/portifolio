"use client";
import React, { useState } from "react";

function Contact() {
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    setError("");
    setSuccess("");
    e.preventDefault();

    fetch("../api/email", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        setSuccess(
          "Thanks for reaching out! Your message is on its way to me, and I'll get back to you soon. In the meantime, feel free to explore more of my work. Cheers!"
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setLoading(false);
      })
      .catch(() => {
        setError(
          "An error occurred while sending your email, please try again or contact me through other means."
        );
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="flex flex-col gap-4 items-center">
      <h2 className="font-semibold text-4xl">Get in touch with me</h2>
      <p className="text-sm md:text-base lg:text-lg mb-4">
        Let&apos;s redefine what&apos;s possible.
      </p>
      <form
        onSubmit={(e) => onSubmit(e)}
        className="flex shrink-0 flex-col gap-6 w-full p-8 max-w-lg border bg-white/60 dark:bg-gray-800 rounded-lg text-sm"
      >
        {error && (
          <span className="w-full text-xs md:text-sm text-red-600">
            {error}
          </span>
        )}
        {success && (
          <span className="w-full text-xs md:text-sm text-green-600">
            {success}
          </span>
        )}
        <input
          className="flex border rounded focus:outline-none focus:border-black dark:border-white/30 dark:focus:border-white/70 p-2 bg-transparent"
          name="name"
          value={formData.name}
          onChange={(e) => onChange(e)}
          required
          placeholder="Full name"
        />
        <input
          className="flex border rounded focus:outline-none focus:border-black dark:border-white/30 dark:focus:border-white/70 p-2 bg-transparent"
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => onChange(e)}
          required
          placeholder="Email address"
        />
        <input
          className="flex border rounded focus:outline-none focus:border-black dark:border-white/30 dark:focus:border-white/70 p-2 bg-transparent"
          name="subject"
          value={formData.subject}
          onChange={(e) => onChange(e)}
          required
          placeholder="Subject or Topic"
        />
        <textarea
          className="flex border rounded focus:outline-none focus:border-black dark:border-white/30 dark:focus:border-white/70 p-2 bg-transparent"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => onChange(e)}
          required
          placeholder="Write your message here. Tell me anything"
        ></textarea>
        <button
          disabled={loading}
          className="p-2 px-4 flex items-center justify-center text-white dark:text-white/90 bg-[var(--primary-color)] rounded hover:opacity-70"
        >
          {loading ? (
            <div className="w-6 h-6 border-4 border-white dark:border-white/30 rounded-full animate-spin border-t-transparent"></div>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </section>
  );
}

export default Contact;
