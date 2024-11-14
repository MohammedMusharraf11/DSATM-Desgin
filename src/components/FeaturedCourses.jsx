import React from 'react';
import { assets } from '../assets/assets';

const courses = [
  {
    id: 1,
    image: assets.Pic1,
    title: "Create An LMS Website With LearnPress",
    instructor: "DeterminedPoitras",
    duration: "2 Weeks",
    students: "156 Students",
    oldPrice: "$29.0",
    newPrice: "Free",
    category: "Photography",
  },
  {
    id: 2,
    image: assets.Pic2,
    title: "Design A Website With ThimPress",
    instructor: "DeterminedPoitras",
    duration: "2 Weeks",
    students: "156 Students",
    oldPrice: "$59.0",
    newPrice: "$49.0",
    category: "Photography",
  },
  {
    id: 3,
    image: assets.Pic3,
    title: "Create An LMS Website With LearnPress",
    instructor: "DeterminedPoitras",
    duration: "2 Weeks",
    students: "156 Students",
    oldPrice: "$29.0",
    newPrice: "Free",
    category: "Photography",
  },
  {
    id: 4,
    image: assets.Pic4,
    title: "Create An LMS Website With LearnPress",
    instructor: "DeterminedPoitras",
    duration: "2 Weeks",
    students: "156 Students",
    oldPrice: "$29.0",
    newPrice: "Free",
    category: "Photography",
  },
  {
    id: 5,
    image: assets.Pic5,
    title: "Create An LMS Website With LearnPress",
    instructor: "DeterminedPoitras",
    duration: "2 Weeks",
    students: "156 Students",
    oldPrice: "$29.0",
    newPrice: "Free",
    category: "Photography",
  },
  {
    id: 6,
    image: assets.Pic6,
    title: "Create An LMS Website With LearnPress",
    instructor: "DeterminedPoitras",
    duration: "2 Weeks",
    students: "156 Students",
    oldPrice: "$29.0",
    newPrice: "Free",
    category: "Photography",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Featured Courses</h2>
          <button className="text-sm font-medium text-secondary border border-secondary px-4 py-2 rounded-lg">
            All Courses
          </button>
        </div>
        <p className="text-gray-500 text-lg mb-6">Explore our Popular Courses</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              data-aos="fade-up" 
              data-aos-duration="800"
              className="bg-white rounded-lg shadow-md p-4 transition-transform duration-300 hover:scale-505"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover" 
                />
                <span className="absolute top-4 left-4 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
                  {course.category}
                </span>
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-sm">by {course.instructor}</p>
                <h3 className="text-lg font-semibold my-2">{course.title}</h3>
                <p className="text-gray-500 text-sm flex items-center">
                  <span className="mr-2">🕒</span> {course.duration} &nbsp;&nbsp; | &nbsp;&nbsp;
                  <span className="mr-2">👥</span> {course.students}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    {course.oldPrice && (
                      <span className="text-gray-400 line-through mr-2">{course.oldPrice}</span>
                    )}
                    <span className="text-primary font-bold">{course.newPrice}</span>
                  </div>
                  <button className="text-secondary text-sm font-semibold underline">View More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
