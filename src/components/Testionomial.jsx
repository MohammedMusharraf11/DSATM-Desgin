// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from 'swiper/modules';
// import { useState, useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// const testimonials = [
//   {
//     id: 1,
//     name: "John Doe",
//     position: "Software Engineer",
//     feedback:
//       "This platform has transformed the way I connect with my alumni and peers. Highly recommended!",
//     avatar: "https://via.placeholder.com/150",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     position: "UX Designer",
//     feedback:
//       "An amazing experience! The network of professionals here is unparalleled.",
//     avatar: "https://via.placeholder.com/150",
//   },
//   {
//     id: 3,
//     name: "Tom Green",
//     position: "Product Manager",
//     feedback:
//       "Great platform to collaborate and gain insights from industry experts.",
//     avatar: "https://via.placeholder.com/150",
//   },
// ];

// const Testimonial = () => {
//     useEffect(() => {
//         AOS.init({
//           duration: 1000, // Adjust the duration as needed
//           once: true,     // Only animate once on page load
//         });
//       }, []);
//   return (
//     <section className="py-24">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-aos="fade-right">
//         <div className="mb-14 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8">
//           <h2 className="text-4xl text-center font-bold text-gray-900 lg:text-left">
//             Testimonials
//           </h2>
//           <div className="flex items-center gap-8">
//             <button
//               className="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
//               data-carousel-prev
//             >
//               <svg
//                 className="h-6 w-6 text-indigo-600 group-hover:text-white"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//             <button
//               className="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
//               data-carousel-next
//             >
//               <svg
//                 className="h-6 w-6 text-indigo-600 group-hover:text-white"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//         <Swiper
//           spaceBetween={50}
//           slidesPerView={1}
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }}
//           loop={true}
//           className="lg:flex grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 swiper mySwiper"
//         >
//           {testimonials.map((testimonial) => (
//             <SwiperSlide key={testimonial.id}>
//               <div className="group bg-white border border-solid h-auto border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600">
//                 <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600">
//                   <svg
//                     className="w-5 h-5"
//                     viewBox="0 0 18 17"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                   {/* Add other icons or testimonials here */}
//                 </div>
//                 <div>
//                   <img
//                     src={testimonial.avatar}
//                     alt={`${testimonial.name} avatar`}
//                     className="rounded-full w-16 h-16 mb-4"
//                   />
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     {testimonial.name}
//                   </h3>
//                   <p className="text-sm text-gray-500">{testimonial.position}</p>
//                   <p className="mt-4 text-gray-700">{testimonial.feedback}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;
