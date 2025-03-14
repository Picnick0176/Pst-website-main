"use client"; // This ensures the component runs on the client side
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles

// Import custom styles (optional)
import '/styles.css';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function SwiperComponent() {
  const images = [
    "/customers1.svg",
    "/customers2.svg",
    // Add more image paths as needed
  ];

  return (
    <Swiper
      pagination={true}
      autoplay={{
        delay: 3000, // Auto slide every 5 seconds
        disableOnInteraction: false, // Allow autoplay to continue after user interaction
      }}
      modules={[Pagination, Autoplay]} // Add Autoplay module
      className="mySwiper"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`image-${index}`} className="w-full h-auto object-contain" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
