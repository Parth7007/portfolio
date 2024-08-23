import React, { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../constants/index.js";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Form submitted successfully!');
        setFormData({
          name: "",
          phoneNo: "",
          email: "",
          query: "",
        });
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        className="my-10 text-center text-6xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h1>
      
      <motion.div
        className="text-center tracking-tighter"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="my-4">
          {CONTACT.email}
        </a>
      </motion.div>

      <motion.form
        className="mx-auto mt-10 max-w-xl"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded border border-neutral-700 px-4 py-2 bg-neutral-800 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Mobile No</label>
          <input
            type="tel"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            className="w-full rounded border border-neutral-700 px-4 py-2 bg-neutral-800 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded border border-neutral-700 px-4 py-2 bg-neutral-800 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Query</label>
          <textarea
            name="query"
            value={formData.query}
            onChange={handleChange}
            className="w-full rounded border border-neutral-700 px-4 py-2 bg-neutral-800 text-white"
            required
          />
        </div>
        <motion.button
          type="submit"
          className="rounded bg-neutral-900 px-6 py-2 font-semibold text-white hover:bg-neutral-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;
