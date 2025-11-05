import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! " + JSON.stringify(formData));
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-8 md:px-24 bg-white text-gray-900 relative overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-2xl flex flex-col gap-8">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center">
          Let’s Connect
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-center text-gray-700">
          Have a project idea, question, or just want to say hi? Send me a
          message and I’ll get back to you.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-5 py-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
            required
          />
          <button
            type="submit"
            className="self-center px-10 py-4 bg-indigo-500 hover:bg-indigo-600 transition rounded-lg font-semibold text-white text-lg"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-10 mt-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition text-xl font-semibold"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition text-xl font-semibold"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-indigo-500 transition text-xl font-semibold"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
