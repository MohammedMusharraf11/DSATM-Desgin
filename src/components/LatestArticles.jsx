// src/components/LatestArticles.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function LatestArticles() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Reduced duration for smoother animation
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const articles = [
    {
      id: 1,
      title: 'Best LearnPress WordPress Theme Collection For 2023',
      date: 'Jan 24, 2023',
      description: 'Looking for an amazing & well-functional LearnPress WordPress Theme?',
      imgSrc: 'src/assets/img_1.png', // Use correct image paths
    },
    {
      id: 2,
      title: 'Best LearnPress WordPress Theme Collection For 2023',
      date: 'Jan 24, 2023',
      description: 'Looking for an amazing & well-functional LearnPress WordPress Theme?',
      imgSrc: 'src/assets/img_2.png',
    },
    {
      id: 3,
      title: 'Best LearnPress WordPress Theme Collection For 2023',
      date: 'Jan 24, 2023',
      description: 'Looking for an amazing & well-functional LearnPress WordPress Theme?',
      imgSrc: 'src/assets/img_3.png',
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-orange-500 text-center mb-4">Latest Articles</h2>
      <p className="text-gray-600 text-center mb-8">Explore our Free Articles</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <div
            key={article.id}
            data-aos="fade-up"
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={article.imgSrc}
              alt={article.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
              <p className="text-sm text-orange-500 mt-2">{article.date}</p>
              <p className="text-gray-600 mt-2">{article.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 px-6 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 mx-auto block">
        All Articles
      </button>
    </section>
  );
}

export default LatestArticles;