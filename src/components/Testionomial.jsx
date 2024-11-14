import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "Emily Carter",
    position: "Student, Computer Science",
    feedback:
      "This platform has helped me connect with my professors and classmates like never before. The learning resources are invaluable!",
    avatar: "src/assets/person.jpg", // Update with a relevant image
  },
  {
    id: 2,
    name: "David Wilson",
    position: "Alumnus, Business Administration",
    feedback:
      "I’ve gained so much insight from the networking opportunities here. The connections with alumni and mentors are amazing for my career!",
    avatar: "src/assets/person1.jpg", // Update with a relevant image
  },
  {
    id: 3,
    name: "Sophia Williams",
    position: "Instructor, Mathematics Department",
    feedback:
      "I use this platform to engage with students and provide them with resources to further their learning. A great tool for any educator!",
    avatar: "src/assets/person2.jpg", // Update with a relevant image
  },
  {
    id: 4,
    name: "Michael Johnson",
    position: "Graduate, Psychology",
    feedback:
      "A fantastic resource for staying connected with my peers and professors. It’s made collaborating on projects and sharing knowledge much easier.",
    avatar: "src/assets/person4.jpg", // Update with a relevant image
  },
  {
    id: 5,
    name: "Olivia Brown",
    position: "Research Assistant, Biology Department",
    feedback:
      "This platform has been a game-changer for finding mentors and learning about new research in my field. The educational resources are top-notch!",
    avatar: "src/assets/person3.jpg", // Update with a relevant image
  },
];


const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-aos="fade-right">
        <div className="mb-14 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8">
          <h2 className="text-4xl text-center font-bold text-primary display-center lg:text-left">
            Testimonials
          </h2>
          <div className="flex items-center gap-8">
            {/* Smaller, positioned arrow buttons */}
            <button
              className="swiper-button-prev group absolute left-0 top-1/2 transform -translate-y-1/2 flex justify-center items-center text-indigo-600 transition-all duration-500 z-10"
              data-carousel-prev
              style={{ fontSize: '18px' }} // Reduced size for arrows
            >
              <svg
                className="h-5 w-5 group-hover:text-indigo-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="swiper-button-next group absolute right-0 top-1/2 transform -translate-y-1/2 flex justify-center items-center text-indigo-600 transition-all duration-500 z-10"
              data-carousel-next
              style={{ fontSize: '18px' }} // Reduced size for arrows
            >
              <svg
                className="h-5 w-5 group-hover:text-indigo-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className="lg:flex grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 swiper mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="mt-4">
              <div className="group bg-gray-200 border border-solid h-auto border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600">
                <div className="text-center">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} avatar`}
                    className="rounded-full w-20 h-20 mb-4 border-4  mx-auto"
                  />
                  <h3 className="text-lg font-semibold text-secondary">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>

                  {/* Star Rating below the name */}
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5 text-yellow-500"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846C1.86652 5.48319 2.14808 5.27862 2.29374 4.98347L4.10326 1.31699Z"
                          fill="currentColor"
                        />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-4 text-gray-700">{testimonial.feedback}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;

