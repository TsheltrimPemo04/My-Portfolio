import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full mt-auto py-6 px-4 sm:px-8 bg-white text-center">
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-base sm:text-lg mb-2">
        <a href="#home" className="hover:text-[#8A6FE8] transition-colors">Home</a>
        <a href="#about" className="hover:text-[#8A6FE8] transition-colors">About</a>
        <a href="#projects" className="hover:text-[#8A6FE8] transition-colors">Projects</a>
        <a href="#experiences" className="hover:text-[#8A6FE8] transition-colors">Experiences</a>
        <a href="#contact" className="hover:text-[#8A6FE8] transition-colors">Contact</a>
      </div>

      {/* Copyright */}
      <div className="text-[#5F5F5F] text-sm">
        <p>&copy; 2025 Tsheltrim Pemo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;