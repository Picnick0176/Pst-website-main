import Link from "next/link";
import Image from "next/image";

import Buttonline from "./Buttonline";

export default function Contactpage() {

    return (
        <div>
            <div className="w-full bg-[#F0F0F0] p-10 flex flex-col relative">
          <div className="w-full p-10 flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center">
            <div className="flex flex-col gap-5 text-center text-[1rem] md:text-[1.2rem] lg:text-[2.2rem]  font-[700]">
              <h1>ห่วงใยบ้านท่านเสมือนบ้านของเรา</h1>
              <h1>PST HOME SERVICES CO .,LTD.</h1>
              <h1>บริการให้คำปรึกษาฟรี</h1>
            </div>
            <hr
              style={{
                border: '1px solid #0D92F4',
                height: '20rem',
                width: '1px',
                margin: '0 10px',
              }}
              className="hidden md:block"
            />
            <div className="flex flex-col gap-5 text-center">
              <h1 className="text-[1.5rem] font-[900]">ปรึกษาฟรี</h1>
              <Image alt="" src="/lineqr.svg" className="w-[260px] md:w-[300px]" width={100} height={100} />
              <Buttonline />
            </div>
          </div>
          <Image
            alt=""
            src="/s1.svg"
            className="w-[160px] md:w-[220px] lg:w-[310px] absolute left-0 md:left-10 bottom-0"
            width={100}
            height={100}
            quality={100}
          />
        </div>
        <div className="w-[20rem] md:w-[50rem] lg:w-[80rem] grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4   gap-2 md:gap-10  mx-auto m-4">
          <Link href="tel:+662998-3036" className="flex gap-3 items-center">
            <Image className="w-[3rem]" src="/tel.svg" alt="" width={100} height={100} />
            <div className="flex flex-col text-[1rem] text-left">
              <p >ติดต่อสอบถาม</p>
              <p >(02)998-3036 | (02)998-3036</p>
            </div>
          </Link>
          <Link href="https://lin.ee/8V7MPcG" className="flex gap-3 items-center">
            <Image className="w-[3rem]" src="/line.svg" alt="" width={100} height={100} />
            <div className="flex flex-col text-[1rem] text-left">
              <p >Line</p>
              <p >@847rfmfk</p>
            </div>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61574275192661" className="flex gap-3 items-center">
            <Image className="w-[3rem]" src="/fb.svg" alt="" width={100} height={100} />
            <div className="flex flex-col text-[1rem] text-left">
              <p >facebook</p>
              <p className="text-[0.8rem]" >พีเอสที โฮมเซอร์วิส บริการกำจัดปลวก </p>
            </div>
          </Link>
          <Link href="mailto:psthomeservice.th@gmail.com" className="flex gap-3 items-center">
            <Image className="w-[3rem]" src="/email.svg" alt="" width={100} height={100} />
            <div className="flex flex-col text-[1rem] text-left">
              <p >Email</p>
              <p >psthomeservice.th@gmail.com</p>
            </div>
          </Link>
        </div>
        </div>
    );
}
