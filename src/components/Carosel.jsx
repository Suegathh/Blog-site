import React, { useState } from 'react';

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const slides = [
    {
      id: 1,
      content: 'slide 1',
      imageUrl: '/images/istockphoto-2093186332-1024x1024.jpg',
      name: 'react pic 1'
    },
    {
      id: 2,
      content: 'slide 2',
      imageUrl: '/images/photo-1592609930961-219235eded71.avif',
      name: 'react pic 2'
    },
    {
      id: 3,
      content: 'slide 3',
      imageUrl: '/images/photo-1592609930961-219235eded71.avif',
      name: 'react pic 3'
    },
  ];

  const nextSlide = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${imageIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="flex-shrink-0 w-full h-full flex items-center justify-center">
            <img src={slide.imageUrl} alt={slide.name} className="object-cover w-full h-full" />
            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
              <h3>{slide.content}</h3>
              <p>{slide.name}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
