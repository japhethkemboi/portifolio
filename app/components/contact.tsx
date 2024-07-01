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
    <section
      id="contact"
      className="flex flex-col lg:flex-row gap-2 p-8 items-center justify-evenly"
    >
      <div className="flex flex-col text-center gap-4 max-w-lg">
        <h2 className="self-center text-black dark:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
          Get in touch with me
        </h2>
        <h3 className="text-sm md:text-base lg:text-lg mb-4">
          If you are looking for a dedicated developer to bring your ideas to
          life, let&apos;s connect! I am always open to discussing new projects
          and opportunities.
        </h3>
      </div>
      <form
        onSubmit={(e) => onSubmit(e)}
        className="flex shrink-0 flex-col gap-6 w-full p-8 max-w-lg bg-white/60 dark:bg-gray-800 rounded-lg"
      >
        {error && (
          <span className="w-full rounded text-xs md:text-sm bg-red-600 text-white p-2 text-center">
            {error}
          </span>
        )}
        {success && (
          <span className="w-full rounded text-xs md:text-sm bg-green-600 text-white p-2 text-center">
            {success}
          </span>
        )}
        <div className="flex flex-col gap-2">
          <label className="text-[var(--sub-text-color)]">Full name</label>
          <input
            className="flex border rounded focus:outline-none focus:border-black dark:border-white/30 dark:focus:border-white/70 p-2 bg-transparent"
            name="name"
            value={formData.name}
            onChange={(e) => onChange(e)}
            required
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[var(--sub-text-color)]">Email</label>
          <input
            className="flex border rounded focus:outline-none focus:border-black dark:border-white/30 dark:focus:border-white/70 p-2 bg-transparent"
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => onChange(e)}
            required
            placeholder="client@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[var(--sub-text-color)]">Subject</label>
          <input
            className="flex border rounded focus:outline-none focus:border-black dark:border-white/30 dark:focus:border-white/70 p-2 bg-transparent"
            name="subject"
            value={formData.subject}
            onChange={(e) => onChange(e)}
            required
            placeholder="What would you like to talk about"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[var(--sub-text-color)]">Message</label>
          <textarea
            className="flex border rounded focus:outline-none focus:border-black dark:border-white/30 dark:focus:border-white/70 p-2 bg-transparent"
            name="message"
            rows={4}
            value={formData.message}
            onChange={(e) => onChange(e)}
            required
            placeholder="Write your message here. Tell me anything"
          ></textarea>
        </div>
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
