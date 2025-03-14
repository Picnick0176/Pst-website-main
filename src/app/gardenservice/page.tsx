"use client";
import ImageSlidertwo from "../components/ImageSlidertwo";
import React, { useState } from "react";
import Image from "next/image";

const images = [
  "/work/78076.jpg", // แนวตั้ง
  "/work/691519.jpg", // แนวตั้ง
  "/work/691525.jpg", // แนวตั้ง
  "/work/691534.jpg", // แนวนอน
  "/work/691547.jpg", // แนวนอน
  "/work/691533.jpg", // แนวนอน
];

export default function Gardenservice() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <br />
      <h1 className="text-center my-10 text-5xl font-[1000] text-[#FF0000]">
        บริการดูแลสวน
      </h1>
<div className="flex flex-col lg:flex-row  m-4 md:m-20 gap-5 justify-center">
                <Image
                    className="w-[400px] h-[400px]  object-cover rounded-br-lg shadow-lg hover:scale-105 "
                    src="/work/691527.jpg"
                    alt="Service Image"
                    width={500}
                    height={700}
                    quality={100}
                />
                <ul className="pl-5 space-y-2 text-black list-none">
                    <h1 className="text-xl text-[#FF0000] font-[900]">
                    ดูแลสวนในหน่วยงานราชการ
                    </h1>
                    <li className="text-sm md:text-xl w-[20rem] md:w-[40rem] lg:w-[30rem] xl:w-[50rem]">
                    
                        เราให้บริการกับหน่วยงานรัฐและราชการมากกว่า <strong>30</strong> แห่งมีคนงานสวนมากกว่า <strong>100คน</strong>
                       
                    </li>

                </ul>
            </div>

      

      <h1 className="text-center my-10 text-2xl font-[1000] text-[#434343]">
        รูปเพิ่มเติม
      </h1>

      <div className="container mx-auto p-4">
        {/* Grid แสดงรูปภาพ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-[400px] cursor-pointer ">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="contain"
                className="rounded-lg  transition-transform transform hover:scale-105 "
                onClick={() => setSelectedImage(src)}
              />
            </div>
          ))}
        </div>

        {/* Lightbox แสดงภาพขนาดใหญ่เมื่อคลิก */}
        {selectedImage && (
          <div
            className="fixed inset-0  bg-black/50 flex justify-center items-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
              <Image
                src={selectedImage}
                alt="Selected"
                width={800}
                height={1000}
                className="rounded-lg"
              />
              <button
                className="absolute top-2 right-2 bg-white text-black px-2 py-1 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                ✖
              </button>
            </div>
          </div>
        )}
        
      </div>
      <br />
       <div>
                <h1 className="text-[1rem] md:text-[2rem] font-[1000]  text-center">
                  เราให้บริการกับ
                </h1>
                <ImageSlidertwo />
              </div>
              <br />
    </>
  );
}
