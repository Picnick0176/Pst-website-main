"use client";
import { useEffect } from "react";
import Image from "next/image";
import TeamSection from "/components/TeamSection";

export default function Profile() {

  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    
    document.addEventListener("contextmenu", handleContextMenu);
    
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (



    <div >
      <header className="relative w-full">
        <Image className="w-full" src="/herd2.svg" alt="Phone Icon" width={1000} height={1000} />
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-[1000] text-[#fff] ">
          <h1 className="text-[1.4rem] md:text-[5rem]">บุคลากร</h1>
          <h2 className="text-[0.9rem] md:text-[2rem]">PST HOME SERVICES CO.,LTD.</h2>
        </div>
      </header>
      <br />
      <h1 className="text-black text-[1rem] md:text-[2rem] font-bold text-center m-5">กรรมการผู้จัดการ</h1>
      <div className="max-w-2xl md:mx-auto bg-[#F4F4F4] rounded-xl flex flex-col md:flex-row lg:max-w-3xl justify-center items-center md:gap-5 lg:gap-10 p-3 px-5 m-10">
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

      <h1 className="text-black text-[1rem] md:text-[2rem] font-bold text-center m-5">รองกรรมการผู้จัดการ</h1>
      <div className=" max-w-xl md:mx-auto bg-[#F4F4F4] rounded-xl flex flex-col md:flex-row justify-center items-center gap-5 p-3  m-10">
        <div className="max-w-[200px] max-h-[200px] w-full h-auto bg-white p-2 rounded-xl">
          <Image
            className="w-full aspect-square rounded-xl object-cover"
            src="/Members/01.jpg"
            alt="รองผู้บริการ PST"
            width={1000}
            height={1000}
          />
        </div>
        <div className="text-left my-1 md:my-10">
          <h1 className="text-black text-[1rem] md:text-[2rem] font-bold">นางสุวิภา เกิดสมบูรณ์</h1>
          <p className="text-[#FF0000] text-[0.9rem] md:text-[1.2rem] font-bold">
            รองกรรมการผู้จัดการ
          </p>
        </div>
      </div>
      <h1 className="text-black text-[1rem] md:text-[2rem] font-bold text-center m-5">บุคลากร</h1>

      <TeamSection />


      <br />
      <br />
      <br />
    </div>
  );
}