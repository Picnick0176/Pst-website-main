"use client";

import React, { useState } from "react";
import Image from "next/image";
import ImageSlider from "/components/ImageSlider";

const images = [
    "/work/6872460.jpg", // แนวตั้ง
    "/work/687228_0.jpg", // แนวตั้ง
    "/work/687230_0.jpg", // แนวตั้ง
    "/work/PNF_4236.jpg", // แนวนอน
    "/work/PNF_4373.jpg", // แนวนอน
    "/work/PNF_4231.jpg", // แนวนอน
];

export default function TermiteService() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <br />
            <h1 className="text-center my-10 text-5xl font-[1000] text-[#FF0000]">
                บริการกำจัดปลวก
            </h1>

            <div className="flex flex-col lg:flex-row  m-4 md:m-20 gap-5 justify-center">
                <Image
                    className="w-[400px] h-[400px]  object-cover rounded-br-lg shadow-lg hover:scale-105 "
                    src="/work/PNF_4236.jpg"
                    alt="Service Image"
                    width={500}
                    height={700}
                    quality={100}
                />
                <ul className="pl-5 space-y-2 text-black list-none">
                    <h1 className="text-xl text-[#FF0000] font-[900]">
                        ห่วงใยบ้านท่านเสมือนบ้านของเรา
                    </h1>
                    <li className="text-sm md:text-xl w-[20rem] md:w-[40rem] lg:w-[30rem] xl:w-[50rem]">
                        บริการกำจัดปลวก<br />
                        เราใช้เทคโนโลยีและสารเคมีที่มีประสิทธิภาพเพื่อกำจัดปลวกให้หมดสิ้น รวมถึงการป้องกันการกลับมารบกวนอีกครั้ง โดยดำเนินการตามขั้นตอนต่อไปนี้:
                        <ul className="list-disc pl-5">
                            <li>สำรวจพื้นที่ ก่อนดำเนินการเพื่อให้แน่ใจว่าเลือกวิธีที่เหมาะสมที่สุด</li>
                            <li>ฉีดพ่นสารเคมีรอบอาคาร และอัดสารลงดินตามจุดที่พบปลวก</li>
                            <li>ติดตั้งกล่องกำจัดปลวก ในบริเวณที่มีการระบาด</li>
                            <li>อัดสารเคมีในรอยร้าวของอาคาร และใต้พื้นคอนกรีตเพื่อป้องกันปลวกขึ้นมาอีก</li>
                        </ul>
                        สารเคมีที่เราใช้คือ <strong>Fipronil 5% w/v</strong> ซึ่งเป็นสารที่ได้รับการยอมรับว่ามีประสิทธิภาพสูงในการกำจัดปลวกและปลอดภัยต่อผู้อยู่อาศัย
                    </li>

                </ul>
            </div>

            ิ<section id="mouse">
                <h1 className="text-center my-10 text-5xl font-[1000] text-[#FF0000]">
                    บริการกำจัดหนู
                </h1>

                <div className="flex flex-col lg:flex-row  m-4 md:m-20 gap-5 justify-center">
                    <Image
                        className="w-[400px] h-[400px]  object-cover rounded-br-lg shadow-lg hover:scale-105 "
                        src="/work/687235_0.jpg"
                        alt="Service Image"
                        width={500}
                        height={700}
                        quality={100}
                    />
                    <ul className="pl-5 space-y-2 text-black list-none">
                        <h1 className="text-xl text-[#FF0000] font-[900]">
                            ห่วงใยบ้านท่านเสมือนบ้านของเรา
                        </h1>
                        <li className="text-sm md:text-xl w-[20rem] md:w-[40rem] lg:w-[30rem] xl:w-[50rem]">
                        บริการกำจัดหนู<br />
                        หนูเป็นพาหะนำโรคและสามารถสร้างความเสียหายให้กับอาคาร เราจึงมีบริการกำจัดหนูที่ครอบคลุมพื้นที่ทั้งหมด โดยมีขั้นตอนดังนี้:
                            <ul className="list-disc pl-5">
                                <li>สำรวจเส้นทางเดินของหนู ทั้งภายในและภายนอกอาคาร</li>
                                <li>วางเหยื่อ, กาวดัก หรือกรงดัก ตามจุดที่พบการเคลื่อนไหวของหนู</li>
                                <li>เก็บซากหนูและทำความสะอาด พ่นน้ำยากำจัดกลิ่นเพื่อป้องกันการแพร่เชื้อ</li>
                                <li>ตรวจสอบและดูแลทุกสัปดาห์ เพื่อให้มั่นใจว่าปัญหาหนูได้รับการแก้ไขอย่างต่อเนื่อง</li>
                            </ul>
                            
                        </li>

                    </ul>
                </div>
            </section>
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
            <div>
                <h1 className="text-[1rem] md:text-[2rem] font-[1000] m-5 text-center">
                    Our clients PST HOME SERVICES CO., LTD.
                </h1>
                <ImageSlider />
            </div >
            <br />
        </>
    );
}
