// src/app/contact/page.tsx
'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-white text-white font-amatic min-h-screen px-4 py-8">

      {/* Contact Section */}
      <div className="container mx-auto flex flex-wrap justify-between gap-2.5">

      {/* Contact Information Box */}
      <div className="bg-custom-blue-5 p-8 rounded-lg shadow-md w-full md:w-[calc(50%-10px)] mb-8 md:mb-0">
        <div className="mb-12 text-2xl font-open_Sans text-center">
          
          {/* Chapel Hill Location */}
          <div className="mb-8">
            <h2 className="text-5xl font-bold mb-4 font-amatic">Chapel Hill</h2>
            <p className="mb-3">
              <strong>Phone: </strong> 
              <a href="tel:1234567890"> (123) 456-7890</a>
            </p>
            <p>
              <strong>Address:</strong> 123 Fiesta Ave, Chapel Hill, NC
            </p>
          </div>

          {/* White separator line */}
          <hr className="border-t border-white mb-8 w-1/3 mx-auto" />

          {/* Durham Location */}
          <div className="mb-8">
            <h2 className="text-5xl font-bold mb-4 font-amatic">Durham</h2>
            <p className="mb-3">
              <strong>Phone: </strong> 
              <a href="tel:9876543210">(987) 654-3210</a>
            </p>
            <p>
              <strong>Address:</strong> 456 Salsa St, Durham, NC
            </p>
          </div>

          {/* White separator line */}
          <hr className="border-t border-white mb-8 w-1/3 mx-auto" />

          {/* Raleigh Location */}
          <div className="mb-8">
            <h2 className="text-5xl font-bold mb-4 font-amatic">Raleigh</h2>
            <p className="mb-3">
              <strong>Phone: </strong> 
              <a href="tel:5551234567">(555) 123-4567</a>
            </p>
            <p>
              <strong>Address:</strong> 789 Tacos Blvd, Raleigh, NC
            </p>
          </div>

          {/* White separator line */}
          <hr className="border-t border-white mb-8 w-1/3 mx-auto" />

          <p className="mb-8">
            <strong>Or Email:</strong> 
            <a href="mailto:info@elsolmexicano.com"> info@elsolmexicano.com</a>
          </p>
        </div>
      </div>



        {/* Contact Form Box */}
        <div className="bg-lime-400 p-8 rounded-lg shadow-md w-full md:w-[calc(50%-10px)]">
          <h2 className="text-5xl text-center mb-16 font-sigmar font-bold">Leave Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6 text-3xl">
            <div>
              <label htmlFor="name" className="block font-amatic font-bold mb-1">
                Name
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded text-black font-sans text-xl"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-amatic font-bold mb-1">
                Email
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded text-black font-sans text-xl"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-amatic font-bold mb-1">
                Message
              </label>
              <textarea
                className="w-full border border-gray-300 p-2 rounded h-48 resize-none text-black font-sans text-xl"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-lime-300 py-2 px-6 font-amatic font-bold text-2xl hover:bg-lime-400 hover:text-white transition duration-200 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
