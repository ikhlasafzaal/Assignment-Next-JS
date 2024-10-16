// pages/contact.tsx
import React from 'react';

export default function Contact() {
    return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg mb-8">
        If you have any questions or would like to get in touch, feel free to reach out!
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-lg" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label className="block text-lg" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label className="block text-lg" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 p-6" 
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
