import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-start px-8 md:px-24 bg-gray-50 text-gray-900 relative overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gray-50/90 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col gap-12 w-full">
        {/* Header */}
        <div data-scroll data-scroll-speed="1.5">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            data-scroll
            data-scroll-speed="1.7"
          >
            Contact Me
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mb-4"
            data-scroll
            data-scroll-speed="1.4"
          >
            Let’s collaborate! Whether you have a project in mind, a question,
            or just want to say hi — feel free to reach out.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div
          className="grid md:grid-cols-3 gap-8"
          data-scroll
          data-scroll-speed="1.2"
        >
          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center text-center">
            <Mail className="w-10 h-10 text-gray-800 mb-3" />
            <h4 className="font-semibold text-lg mb-1">Email</h4>
            <p className="text-gray-600">aabhashbasnet25@gmail.com</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center text-center">
            <Phone className="w-10 h-10 text-gray-800 mb-3" />
            <h4 className="font-semibold text-lg mb-1">Phone</h4>
            <p className="text-gray-600">+977-9804984249</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center text-center">
            <MapPin className="w-10 h-10 text-gray-800 mb-3" />
            <h4 className="font-semibold text-lg mb-1">Location</h4>
            <p className="text-gray-600">Bhaktapur, Nepal</p>
          </div>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md w-full md:w-2/3"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Send a Message
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows="5"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-800 mb-6"
            required
          ></textarea>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </motion.form>

        {/* Social Links */}
        <div
          className="flex gap-6 mt-8 text-gray-700"
          data-scroll
          data-scroll-speed="1"
        >
          <a
            href="https://github.com/aabhashbasnet"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-900 transition text-lg font-medium"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/aabhashbasnet"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-900 transition text-lg font-medium"
          >
            LinkedIn
          </a>
          <a
            href="mailto:aabhash.basnet@example.com"
            className="hover:text-gray-900 transition text-lg font-medium"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
