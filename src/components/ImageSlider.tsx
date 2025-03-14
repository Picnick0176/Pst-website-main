import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from "next/image";
import '/styles.css';
import { Pagination, Autoplay } from 'swiper/modules';

export default function SwiperComponent() {
  const images = [
    "/customers1.svg",
    "/customers2.svg",
  ];

  return (
    <Swiper
      pagination={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <Image 
            src={src} 
            alt={`image-${index}`} 
            className="w-full h-auto object-contain" 
            width={500} // Set the width to an appropriate value
            height={300} // Set the height to an appropriate value
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
