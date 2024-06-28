import React from "react";

function Contact() {
  return (
    <div id="contact" className="flex flex-col gap-6 p-8 items-center max-w-lg">
      <h1 className="font-bold xs:text-xl text-2xl">Get in touch with me</h1>
      <form className="flex flex-col gap-4 p-4 w-full bg-white/60 rounded-lg">
        <div className="flex flex-col gap-2">
          <label className="text-[var(--sub-text-color)]">Full name</label>
          <input
            className="flex border rounded p-2 bg-transparent active:outline-none"
            name="name"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[var(--sub-text-color)]">Email</label>
          <input
            className="flex border rounded p-2 bg-transparent active:outline-none"
            type="email"
            name="email"
            placeholder="client@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[var(--sub-text-color)]">Subject</label>
          <input
            className="flex border rounded font-semibold p-2 bg-transparent active:outline-none"
            name="subject"
            placeholder="What would you like to talk about"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[var(--sub-text-color)]">Message</label>
          <textarea
            className="flex border rounded p-2 bg-transparent active:outline-none"
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
  );
}

export default Contact;
