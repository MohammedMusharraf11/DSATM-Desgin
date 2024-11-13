import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
// import Testimonial from './components/Testionomial';

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <>
    <Navbar />
    <h1 className="text-5xl font-bold underline justify-center text-center " data-aos="fade-up-left">
      Hello world!
    </h1>
    {/* <Testimonial /> */}
    </>
  )
}

export default App

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// function App() {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination]}
//       spaceBetween={50}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//     >
//       <SwiperSlide>
//         <div className="bg-blue-500 h-48 flex items-center justify-center text-white">
//           Slide 1
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className="bg-green-500 h-48 flex items-center justify-center text-white">
//           Slide 2
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className="bg-red-500 h-48 flex items-center justify-center text-white">
//           Slide 3
//         </div>
//       </SwiperSlide>
//     </Swiper>
//   );
// }

// export default App;

