// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
      <div className="text-lg font-semibold">Seniculator</div>
      <div className="flex gap-4 text-xl">
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <i className="ri-twitter-x-line hover:text-blue-400"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="ri-facebook-fill hover:text-blue-500"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="ri-instagram-line hover:text-pink-500"></i>
        </a>
        <a href="tel:+1234567890">
          <i className="ri-phone-line hover:text-green-400"></i>
        </a>
        <a href="mailto:info@nexustech.com">
          <i className="ri-mail-line hover:text-yellow-300"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
