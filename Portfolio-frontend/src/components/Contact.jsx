import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (Backend not connected yet)");
  };

  return (
    <section
      id="contact"
      className="bg-[#0d0d0d] text-white py-24 px-6 md:px-12 flex justify-center"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact <span className="text-blue-500">Me</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-[#111] border border-gray-700 rounded-2xl p-8 shadow-lg"
        >
          {/* NAME */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2 text-sm">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg bg-[#1b1b1b] border border-gray-700 text-white focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2 text-sm">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-lg bg-[#1b1b1b] border border-gray-700 text-white focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* MESSAGE */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2 text-sm">
              Your Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-[#1b1b1b] border border-gray-700 text-white focus:border-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}