import React from "react";

function Contact() {
  return (
    <section id="contact" className="flex flex-col gap-2">
      <h2 className="self-center xs:text-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold">
        Get in touch with me
      </h2>
      <div className="flex flex-col lg:flex-row gap-6 p-8 items-center justify-evenly">
        <div className="flex flex-col text-center gap-4 max-w-lg">
          <h3 className="xs:text-sm md:text-lg lg:text-4xl font-semibold mb-4">
            If you are looking for a dedicated developer to bring your ideas to
            life, let&apos;s connect! I am always open to discussing new
            projects and opportunities.
          </h3>
        </div>
        <form className="flex shrink-0 flex-col gap-6 w-full p-8 max-w-lg bg-white/60 rounded-lg">
          <div className="flex flex-col gap-2">
            <label className="text-[var(--sub-text-color)]">Full name</label>
            <input
              className="flex border rounded focus:outline-none focus:border-black p-2 bg-transparent"
              name="name"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[var(--sub-text-color)]">Email</label>
            <input
              className="flex border rounded focus:outline-none focus:border-black p-2 bg-transparent"
              type="email"
              name="email"
              placeholder="client@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[var(--sub-text-color)]">Subject</label>
            <input
              className="flex border rounded focus:outline-none focus:border-black font-semibold p-2 bg-transparent"
              name="subject"
              placeholder="What would you like to talk about"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[var(--sub-text-color)]">Message</label>
            <textarea
              className="flex border rounded focus:outline-none focus:border-black p-2 bg-transparent"
              name="message"
              rows={5}
              placeholder="Write your message here. Tell me anything"
            ></textarea>
          </div>
          <button className="p-2 px-4 text-white bg-[var(--primary-color)] font-semibold rounded hover:opacity-70">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
