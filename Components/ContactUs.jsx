import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import contactSVG from "../src/assets/contactSVG.svg"

const ContactUs = () => {
  return (
    <section id='contact' className="max-w-6xl mx-auto px-6 py-12 font-poppins">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
        
        <div className="md:w-1/2 bg-gray-100 p-6 flex flex-col justify-center space-y-6">
        <img src={contactSVG} alt="" />
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-blue-600" />
            <p className="text-gray-700">+92 300 1234567</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-600" />
            <p className="text-gray-700">seniculator@gmail.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaGlobe className="text-blue-600" />
            <p className="text-gray-700">www.seniculator.app</p>
          </div>
        </div>

        <form className="md:w-1/2 p-6 space-y-4 bg-white">
        <h2 className='text-2xl md:text-3xl'>Something to Ask ? Feel Free to Drop Your Message</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <input
            type="text"
            placeholder="Subject (optional)"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;