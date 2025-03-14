
import Image from "next/image";
import ImageSliderfour from "@/components/ImageSliderfour";

export default function Customer() {

    return (
        <div >
        <header className="relative w-full">
                <Image className="w-full" src="/herd2.svg" alt="Phone Icon" width={100} height={100} />
                <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-[1000] text-[#fff] ">
                  <h1 className="text-[1.4rem] md:text-[5rem]">ลูกค้าของเรา</h1>
                  <h2 className="text-[0.9rem] md:text-[2rem]">PST HOME SERVICES CO.,LTD.</h2>
                </div>
              </header>
          <div className="mx-auto text-center m-10">
            <h1 className="text-[1rem] md:text-[2rem] font-[1000] m-5">
            PST HOME SERVICES CO.,LTD.
            </h1>
            <li className="w-[20rem] text-[1rem] md:w-[50rem] mx-auto md:text-[1.5rem] list-none text-center">
              ขอขอบพระคุณลูกค้าทุกท่านที่ไว้วางใจให้ P.S.T HOME SERVICES CO., LTD. ได้เป็นส่วนหนึ่งในการดูแลและบริหารจัดการด้านกำจัดแมลงและสัตว์พาหะ ในกลุ่มธุรกิจต่างๆ ไม่ว่าจะเป็น ห้างสรรพสินค้า ร้านอาหาร โรงแรม อาคารสำนักงาน โรงงานอุตสาหกรรม โรงพยาบาล สถานศึกษา และอีกมากมาย
            </li>
          </div>
          <br />
          <div>
            <h1 className="text-center text-[1rem] md:text-[2rem] font-[1000] m-5">
              Our clients PST HOME SERVICES CO., LTD.
            </h1>
          <ImageSliderfour/>
            <br />
          </div>
      </div>
    );
}
