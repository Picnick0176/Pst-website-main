"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Buttonabout from "@/components/Buttonabout";
import ImageSlider from "@/components/ImageSlider";
import ImageSlidershow from "@/components/ImageSlidershow";
import ServiceHighlight from "@/components/ServiceHighlight";
import Pipelaying from "@/components/Pipelaying";

export default function Home() {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };
  
    document.addEventListener("contextmenu", handleContextMenu);
  
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  

  return (
    <div className="justify-center items-center text-center">
      <Image className="w-full" src="/Poster.svg" alt="Phone Icon" width={100} height={100} />
      <br />
      <br />
      <section id="servebox" className="flex flex-col justify-center items-center">
        <h1 className="font-[1000] text-[1rem] md:text-[1.5rem]">
          บริการ PST HOME SERVICES CO., LTD.
        </h1>
        <div className="flex justify-center items-center gap-4 m-5 md:m-10 md:gap-10 flex-col md:flex-row">
          <Link href="/#contact" className="flex flex-col items-center">
            <Image className="w-50 md:w-60 hover:opacity-90 hover:cursor-pointer" src="/serve1.svg" alt="server" width={100} height={100} />
          </Link>
          <Link href="/termiteservice" className="flex flex-col items-center">
            <Image className="w-50 md:w-60 hover:opacity-90 hover:cursor-pointer" src="/serve2.svg" alt="server" width={100} height={100} />
          </Link>
          <Link href="/gardenservice" className="flex flex-col items-center">
            <Image className="w-50 md:w-60 hover:opacity-90 hover:cursor-pointer" src="/serve3.svg" alt="server" width={100} height={100} />
          </Link>
          <Link href="/cleanservice" className="flex flex-col items-center">
            <Image className="w-50 md:w-60 hover:opacity-90 hover:cursor-pointer" src="/serve4.svg" alt="server" width={100} height={100} />
          </Link>
        </div>
        <h1 className="text-[1.5rem] md:text-[3rem] py-1 font-[900] flex">
          เปิดให้บริการมากกว่า &nbsp;
          <p className="text-[#FF0000]">20 ปี</p>
        </h1>
        <p className="text-[0.7rem] md:text-[1rem]">
          โดยช่างผู้ชำนาญการ จบจากมหาวิทยาลัยเกษตรศาสตร์
        </p>
        <br />
        <div className="relative flex flex-col p-10 w-full bg-[#0D98FF] my-10 text-center">
          {/* ข้อความ */}
          <h1 className="text-[#fff] font-extrabold text-[1rem]">
            PST HOME SERVICES CO., LTD.
          </h1>
          <h1 className="text-[#fff] font-black text-[1.7rem] my-1 md:text-[2rem]">
            เลือกบริการที่คุณกำลังมองหา
          </h1>
          {/* ลูกศรสามเหลี่ยม */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0D98FF] rotate-45"></div>
        </div>

        {/* card server */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-5">
          <Link href="/termiteservice" className="flex flex-col items-center">
            <Image className="w-40 md:w-60 hover:opacity-90 hover:cursor-pointer" src="/ant.svg" alt="ant" width={100} height={100} />
            <p className="text-[#0D98FF] font-bold mt-2 text-xl">ปลวก</p>
          </Link>
          <Link href="/#contact" className="flex flex-col items-center">
            <Image className="w-40 md:w-60 hover:opacity-90 hover:cursor-pointer" src="/insect.svg" alt="insect" width={100} height={100} />
            <p className="text-[#0D98FF] font-bold mt-2 text-xl">มดและแมลงสาบ</p>
          </Link>
          <Link href="/termiteservice#mouse" className="flex flex-col items-center">
            <Image className="w-40 md:w-60 hover:opacity-90 hover:cursor-pointer" src="/mouse.svg" alt="mouse" width={100} height={100} />
            <p className="text-[#0D98FF] font-bold mt-2 text-xl">หนู</p>
          </Link>
          <Link href="/#contact" className="flex flex-col items-center">
            <Image className="w-40 md:w-60 hover:opacity-90 hover:cursor-pointer" src="/mosquito.svg" alt="mosquito" width={100} height={100} />
            <p className="text-[#0D98FF] font-bold mt-2 text-xl">ยุง</p>
          </Link>
        </div>
        <Pipelaying/>
        <div className="mx-10 md:flex md:flex-row gap-15">
          {/* Image Section */}
          <div className="flex justify-center items-center my-10">
            <Image src="/PST.png" alt="PST" width={500} height={500} />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center text-left gap-4 font-bold">
            <h1 className="text-3xl font-bold text-gray-800">บริการกำจัดปลวก</h1>
            <p className="text-lg text-gray-600">ห่วงใยบ้านท่านเสมือนบ้านของเรา</p>
            <p className="text-lg text-gray-600">รับประกันความปลอดภัย</p>
            <hr className="my-3 border-[#0D98FF] w-40" />
            <h1 className="text-[2.5rem] font-bold text-black">
              สำรวจพื้นที่ <span className="text-red-600">ฟรี!!!</span>
            </h1>
            <Buttonabout />
          </div>
        </div>
      </section>
      <br />
      <ServiceHighlight />
      <br />
      <section id="about" className="justify-center items-center my-10">
        {/* CEO */}
        <div className="w-full md:mx-auto bg-[#F4F4F4] rounded-xl flex flex-col md:flex-row  justify-center items-center md:gap-5 lg:gap-10 p-3 px-5 ">
          <div className="max-w-[250px] md:max-w-[300px] max-h-[300px] w-full h-auto bg-white p-3 rounded-xl">
            <Image
              className="w-full aspect-square rounded-xl object-cover"
              src="/Members/PNF_4382.jpg"
              alt="ผู้บริการ PST"
              width={1000}
              height={1000}
            />
          </div>
          <div className="text-left my-1 md:my-5 lg:my-10">
            <h1 className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              คุณประสาร แสงกระจ่าง
            </h1>
            <p className="text-[#FF0000] text-sm md:text-lg font-bold">
              กรรมการผู้จัดการ
            </p>
            <br />
            <div className="text-[#000]">
              <p className="text-md font-bold">ปริญญาตรี:</p>
              <p className="text-md">ภาควิชากีฏวิทยา มหาวิทยาลัยเกษตรศาสตร์</p>
              <p className="text-md font-bold">ปริญญาโท:</p>
              <p className="text-md">MBA บริหารธุรกิจ มหาวิทยาลัยเกษตรศาสตร์</p>
              <p className="text-md font-bold">ปัจจุบัน:</p>
              <p className="text-md">ตำแหน่งผู้จัดการ บริษัท พี.เอส.ที. โฮมเซอร์วิส จำกัด</p>
            </div>
          </div>
        </div>
        {/* บ้านท่านมีปลวกหรือไม่ */}
        <div className="relative flex flex-col p-10 w-full bg-[#D9D9D9] text-center">
          <h1 className="text-[#000] font-extrabold text-[1.5rem] md:text-[2rem]">
            บ้านท่านมีปลวกหรือไม่??
          </h1>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#D9D9D9] rotate-45"></div>
        </div>
        {/* รายการ */}
        <div className="justify-center items-center my-10 flex flex-col md:flex-row gap-10">
          <div className="text-[#000] flex flex-col gap-4">
            <p className="text-[2rem] font-bold">รายการเกษตรอาสา</p>
            <p className="text-[1.4rem]">ออกอากาศ วันที่ 16 มกราคม 2553</p>
            <p className="text-[1.4rem]">เวลา 05.90 - 06.00 น.</p>
            <p className="text-[1.4rem]">ทางสถานีโทรทัศน์โมเดิร์นไนน์</p>
          </div>
          <iframe
            className="w-[360px] h-[215px] md:w-[460px] md:h-[315px]"
            src="https://www.youtube.com/embed/ZAnRpnzrE1w?si=eWN-PVQkgPyE3hXS"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ pointerEvents: "auto" }}
          ></iframe>
        </div>
        <hr className="w-1/2 h-[0.5px] bg-[#9D9D9D] border-0 mx-auto" />
        <div className="m-10">
          <h1 className="text-[1.5rem] text-[#FF0000] font-[1000]">
            บ้านท่านมีปลวกหรือไม่ ?
          </h1>
          <div className="max-w-2xl mx-auto p-6 text-left">
            <h2 className="text-lg font-semibold mb-4">
              วิธีการสังเกตว่าบ้านท่านมีปลวกหรือไม่ มีวิธีสังเกตุคือ
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-black">
              <li>
                ถ้าในช่วงเวลาฝนตกมีแมลงเม่าบินมาที่บ้าน นั้นเป็นสัญญาณเตือนว่าปลวกทำลายจะมาสร้างอาณาจักรที่บ้านท่าน
              </li>
              <li>
                สังเกตตู้ในครัว ถ้ามีเศษดินเป็นขุยแสดงว่ามีปลวกทำลายอาศัยอยู่
              </li>
              <li>สังเกตที่วงกบประตูห้องน้ำเพราะมีความชื้นสูง</li>
              <li>สังเกตที่ห้องเก็บของเพราะที่นั้นถือเป็นแหล่งอาหารชั้นดี</li>
              <li>
                สังเกตจากฝ้าเพดานถ้ามีลักษณะบวมและมีขุยตกลงมาบ่อยให้รีบแกะดูทันที
              </li>
            </ul>
          </div>
          <Buttonabout />
        </div>
      </section>
      <br />
      <section id="customers" className="m-10">
        <div className="mx-auto">
          <h1 className="text-[3rem] md:text-[4rem] font-[1000] m-5">
            ลูกค้าของเรา
          </h1>
          <li className="w-[20rem] text-[1rem] md:w-[40rem] lg:w-[50rem] mx-auto md:text-[1.5rem] list-none text-center">
            ขอขอบพระคุณลูกค้าทุกท่านที่ไว้วางใจให้ P.S.T HOME SERVICES CO., LTD. ได้เป็นส่วนหนึ่งในการดูแลและบริหารจัดการด้านกำจัดแมลงและสัตว์พาหะ ในกลุ่มธุรกิจต่างๆ ไม่ว่าจะเป็น ห้างสรรพสินค้า ร้านอาหาร โรงแรม อาคารสำนักงาน โรงงานอุตสาหกรรม โรงพยาบาล สถานศึกษา และอีกมากมาย
          </li>
        </div>
        <br />
        <div>
          <h1 className="text-[1rem] md:text-[2rem] font-[1000] m-5">
            Our clients PST HOME SERVICES CO., LTD.
          </h1>
          <ImageSlider />
        </div>
      </section>
      <section id="stepservice" >
        <div className="w-full bg-[#F0F0F0] p-10 flex flex-col">
          <h1 className="text-[2rem] font-[1000]">ขั้นตอนการบริการ</h1>
          <div className="w-[20rem] md:w-[30rem] lg:w-[70rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4    gap-3 my-10 mx-auto">
            <Link href="/" className="bg-[#D9D9D9] px-12 py-5 rounded-2xl flex flex-col items-center">
              <Image className="w-[6rem]" src="/contect.svg" alt="" width={100} height={100} />
              <p className="text-[1rem] font-[900] mt-4">1.ติดต่อ</p>
            </Link>
            <Link href="/" className="bg-[#D9D9D9] px-14 py-5 rounded-2xl flex flex-col items-center">
              <Image className="w-[6rem]" src="/search.svg" alt="" width={100} height={100} />
              <p className="text-[1rem] font-[900] mt-4">2.สำรวจพื้นที่</p>
            </Link>
            <Link href="/" className="bg-[#D9D9D9] px-14 py-5 rounded-2xl flex flex-col items-center">
              <Image className="w-[6rem]" src="/home.svg" alt="" width={100} height={100} />
              <p className="text-[1rem] font-[900] mt-4">3.เข้าบริการโดยทีมช่าง</p>
            </Link>
            <Link href="/" className="bg-[#D9D9D9] px-14 py-5 rounded-2xl flex flex-col items-center">
              <Image className="w-[6rem]" src="/heart.svg" alt="" width={100} height={100} />
              <p className="text-[1rem] font-[900] mt-4">4.ดูแล</p>
            </Link>
          </div>
        </div>
        <br />
        <div>
          <h1 className="text-[2rem] font-[1000] ">ตัวอย่างการให้บริการ</h1>
          <ImageSlidershow />
        </div>
      </section>
      <br />
      <br />
    </div>
  );
}
