"use client"; // This ensures the component runs on the client side
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
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
    "/customers3.svg",
    "/customers4.svg",
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
          <Image src={src} alt={`image-${index}`} 
           width={500} // Set the width to an appropriate value
           height={300} // Set the height to an appropriate value
           className="w-full h-auto object-contain" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
