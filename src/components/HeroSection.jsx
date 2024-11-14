import React, { useEffect } from 'react';
import { assets } from '../assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    // Initialize AOS with `once: false` to trigger on every scroll
    AOS.init({
      duration: 1000, // Adjust the duration as needed
      once: false,    // Trigger animation on every scroll
    });

    // Reinitialize AOS on scroll or window resize
    const handleScroll = () => {
      AOS.refresh(); // Refresh animations on scroll
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 bg-white lg:flex-row lg:justify-between">
      {/* Left Side Content */}
      <div className="text-center lg:text-left lg:max-w-lg" data-aos="fade-right">
        <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl">
          <span className="text-primary">Unlock</span> <span className='text-secondary'>Your Creative Potential</span> 
        </h1>
        <p className="mt-4 text-lg text-[#262626] font-semibold">
          with Online Design and Development Courses.
        </p>
        <p className="text-sm text-[#262626] mt-2">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
        <div className="flex flex-col mt-6 space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button className="px-6 py-3 font-semibold text-white bg-primary rounded-md hover:bg-primary" data-aos="">
            Explore Courses
          </button>
          <button className="px-6 py-3 font-semibold text-primary border border-primary rounded-md hover:bg-gray-100 hover:text-secondary hover:border hover:border-secondary">
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
