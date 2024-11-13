import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the duration as needed
      once: true,     // Only animate once on page load
    });
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Company' },
    { id: 3, text: 'Resources' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div
      className="w-full bg-black flex justify-between items-center h-24 px-4 text-white"
      data-aos="fade-down" // AOS effect for fade from top
    >
      {/* Logo */}
      <h1 className="text-3xl font-bold text-[#00df9a]">REACT.</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map(item => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed md:hidden top-0 h-full w-[60%] bg-[#000300] border-r border-gray-900 duration-500 ease-in-out ${
          nav ? 'left-0' : 'left-[-100%]'
        }`}
      >
        {/* Mobile Logo */}
        <h1 className="text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className="p-4 border-b border-gray-600 hover:bg-[#00df9a] rounded-xl duration-300 hover:text-black cursor-pointer"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
