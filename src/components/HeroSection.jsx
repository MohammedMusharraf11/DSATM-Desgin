import React from 'react';
import { assets } from '../assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const HeroSection = () => {
    
    useEffect(() => {
        AOS.init({
          duration: 1000, // Adjust the duration as needed
          once: true,     // Only animate once on page load
        });
      }, []);
    
  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 bg-white lg:flex-row lg:justify-between">
      {/* Left Side Content */}
      <div className="text-center lg:text-left lg:max-w-lg " data-aos="fade-right">
        
        <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl">
          <span className="text-primary">Unlock</span> Your Creative Potential
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          with Online Design and Development Courses.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
        <div className="flex flex-col mt-6 space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button className="px-6 py-3 font-semibold text-white bg-primary rounded-md hover:bg-primary">
            Explore Courses
          </button>
          <button className="px-6 py-3 font-semibold text-primary  border border-primary rounded-md hover:bg-gray-100 hover:text-secondary hover:border hover:border-secondary">
            View Pricing
          </button>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="mt-10 lg:mt-0 lg:max-w-lg" data-aos="fade-left">
        <img
          src={assets.Hero} // Replace this with the actual image path or import
          alt="Online Courses Illustration"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
