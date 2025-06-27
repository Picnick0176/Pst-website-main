import Image from "next/image";
import 'aos/dist/aos.css';
import AOS from 'aos';
export default function about() {
  return (
    <div >
      <header className="relative w-full">
        <Image className="w-full" src="/herd2.svg" alt="Phone Icon" width={100} height={100} />
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-[1000] text-[#fff] ">
          <h1 className="text-[1.4rem] md:text-[5rem]">บริการกำจัดปลวกและสัตว์พาหะ</h1>
          <h2 className="text-[0.9rem] md:text-[2rem]">PST HOME SERVICES CO.,LTD.</h2>
        </div>
      </header>

      <div className="max-w-4xl md:mx-auto p-10 text-left bg-[#F4F4F4] rounded-[2rem] m-10 px-4 sm:px-10 flex flex-col gap-2">
        <h1  className=" text-[1.5rem] text-center text-[#FF0000] font-[1000]">
          บ้านท่านมีปลวกหรือไม่ ?
        </h1>
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

      <div className="max-w-4xl md:mx-auto p-10 text-left bg-[#F4F4F4] rounded-[2rem] m-10 px-4 sm:px-10 flex flex-col gap-2">
        <h1 className=" text-[1.5rem] text-center text-[#FF0000] font-[1000]">
          ความรู้ทั่วไปเกี่ยวกับปลวก
        </h1>
        <ul className="pl-5 space-y-2 text-black flex list-none">
          <li>
            <strong>ปลวก</strong> เป็นแมลงชนิดหนึ่งในอันดับ Isoptera Order มีชีวิตอยู่รวมกันเป็นหมวดหมู่ ปลวกนับเป็นศัตรูสำคัญต่อเศรษฐกิจของประเทศ ปลวกทำความเสียหายโดยการทำลายอาคารบ้านเรือน สิ่งก่อสร้าง เครื่องเรือน กระดาษและวัสดุสิ่งของ เป็นต้น
            ในปัจจุบันนี้มีการค้นพบปลวก มากกว่า 2,000 ชนิด ในประเทศไทยเรา ซึ่งเป็นประเทศแถบร้อนจะมีปลวกชุกชุมที่สุด ปลวกแต่ละชนิด จะมีความเป็นอยู่และความต้องการอาหารแตกต่างกันไป ความแตกต่างนี้จะเชื่อมโยงไปถึงวิธีป้องกันและกำจัดด้วย
          </li>
        </ul>

      </div>

      <div className="max-w-4xl md:mx-auto p-10 text-left bg-[#F4F4F4] rounded-[2rem] m-10 px-4 sm:px-10 flex flex-col gap-2">
        <h1 className=" text-[1.5rem] text-center text-[#FF0000] font-[1000]">
          ชนิดและประเภทของปลวก
        </h1>
        <h2 className="text-lg font-semibold mb-4">
          การจำแนกปลวกอย่างกว้างๆ แบ่งออกเป็น 2 พวกใหญ่ๆ คือ ปลวกที่อาศัยอยู่ในดิน และปลวกที่ไม่อาศัยอยู่ในดิน
        </h2>
        <ul className="pl-5 space-y-2 text-black  list-none">
          <li><strong>1.ปลวกอาศัยอยู่ในดิน</strong> จำแนกได้เป็น 3 พวกคือ</li>
          <li className="mx-3">
            <strong>1.1 ปลวกใต้ดิน (Subterranean termites) </strong> พวกนี้จะอาศัยอยู่ในดิน เกือบตลอดอายุของมัน แม้ว่าจะออกจากผิวดินไปแล้วก็ยังมีการติดต่อกับพื้นดินอยู่โดยการทำอุโมงค์ทางเดินด้วยดินไปสู่แหล่ง
            อาหารต่างๆ ที่อยู่เหนือดิน
          </li>
          <li className="mx-3">
            <strong>1.2 ปลวกที่อยู่ตามจอมปลวก  (Mound-building termites) </strong> เป็นปลวกที่สร้างรังหรืออาณาจักรขนาดใหญ่อยู่บนพื้นดิน โดยใช้เม็ดดินเล็กๆ สร้างขึ้นเป็นเนินสูงใหญ่ที่เรียกว่า จอมปลวก
          </li>
          <li className="mx-3">
            <strong>1.3 ปลวกที่อยู่ตามรังขนาดเล็ก (Carton-nest-building termites)</strong> รังของปลวกชนิดนี้ เกิดจากมูลของปลวกผสมกับเศษไม้เล็กๆ และสร้างเป็นรังที่มีรูปร่างและขนาดแตกต่างกันไป
          </li>

          <li><strong>2. ปลวกที่อาศัยอยู่ในเนื้อไม</strong> มี 2 พวกใหญ่ๆ คือ</li>
          <li className="mx-3">
            <strong>2.1 ปลวกไม้แห้ง (Dry-wood termites)  </strong> เป็นพวกที่มีอาณาจักร หรือรังเล็กกว่าปลวกใต้ดิน อาศัยอยู่ในเนื้อไม้ และจะไม่ลงไปในดิน ปลวกชนิดนี้เองที่ทำความเสียหายร้ายแรงต่ออาคารบ้านเรือน
          </li>
          <li className="mx-3">
            <strong>2.2 ปลวกไม้ชื้น อาศัยอยู่ในเนื้อไม้ที่มีความชื้นสูง </strong> เช่น เปลือกไม้ ไม้ซุง หรือไม้ที่ผุ ห้องที่มีความชื้นเย็น นับว่าเป็นสถานที่เหมาะสมสำหรับปลวกประเภทนี้อาศัยอยู่ ตามปกติแล้วเป็นปลวกที่ไม่มีอันตรายต่อบ้านเรือนมากนัก
          </li>
        </ul>
      </div>


      <div className="max-w-4xl md:mx-auto p-10 text-left bg-[#F4F4F4] rounded-[2rem] m-10 px-4 sm:px-10 flex flex-col gap-2">
        <h1 className=" text-[1.5rem] text-center text-[#FF0000] font-[1000]">ชีวิตและความเป็นอยู่ของปลวก</h1>
        <h2 className="text-lg font-semibold mb-4">
          ปลวกเป็นแมลงที่อยู่เป็นหมู่สังคมประกอบด้วยวรรณะต่างๆ รวม 3 วรรณะ และมีหน้าที่แตกต่างกันไป
        </h2>
        <ul className="pl-5 space-y-2 text-black  list-none">
          <li><strong>1.ปลวกสืบพันธุ์</strong> คือปลวกตัวผู้ แต่ตัวเมีย มีปีกและเพศดั่งแมลงตัวอื่นๆ ทั่วไปตามปกติในรังหรืออาณาจักรจะพบปลวกคู่นี้ทำหน้าที่ผสมพันธุ์และสืบพันธุ์ ตัวผู้เรียกว่า <strong>ราชาปลวก</strong> และตัวเมียเรียกว่า <strong>ราชินีปลวก</strong>
            ออกไข่เกิดเป็นปลวกชนิดต่างๆในรัง นอกจากนี้ปลวกสืบพันธุ์ยังมีหน้าที่กระจายพันธุ์ และ สรัาง อาณาจักร ใหม่ให้เกิดขึ้นอีกด้วย ปลวกชนิดนี้มีปีกทั้งตัวผู้ตัวเมีย เรียกว่า แมลงเม่า เมือจับคู่ผสมพันธุ์ แล้วจะสลัดปีก และเลือกสถานที่เหมาะสมเพื่อสร้างรัง และเกิดเป็นอาณาจักรใหม่ต่อไป</li>
            <li><strong>2.ปลวกงาน</strong> เป็นปลวกตัวเล็กไม่มีปีก ไม่มีเพศ และไม่มีตา อาศัยอยู่ในดินหรือเนื้อไม้ที่มันกัดทำลาย มีหน้าที่ก่อสร้าง</li>
            <li><strong>3.ปลวกทหาร</strong> เป็นปลวกตัวเล็กแต่มีตัวโต และขากรรไกรขนาดใหญ่ใช้ในการต่อสู้ ไม่มีปีก ไม่มีตา และไม่มีเพศ ปลวกชนิดนี้ทำหน้าที่ปกป้องอันตรายที่จะเกิดขึ้นกับรัง ศัตรูสำคัญคือ มด</li>
        </ul>
      </div>

      <div className="max-w-4xl md:mx-auto p-10 text-left bg-[#F4F4F4] rounded-[2rem] m-10 px-4 sm:px-10 flex flex-col gap-2">
        <h1 className=" text-[1.5rem] text-center text-[#FF0000] font-[1000]">การสร้างอาณาจักร</h1>
        <ul className="pl-5 space-y-2 text-black  list-none">
          <li><strong>การสร้างอาณาจักร</strong> การสร้างอาณาจักรของปลวกแต่ละชนิด จะมีแบบแผนที่แน่นอน แต่แตกต่างตามสายพันธุ์ และภูมิอากาศสภาพแวดล้อม</li>
            <li><strong>การเกิดอาณาจักร</strong> เกิดจากแมลงเม่าที่มักจะออกมาให้เห็นช่วงเวลาหลังฤดูฝน แมลงเม่าเหล่านี้ จะบินเข้าอาคาร เพื่อรับความอบอุ่นจากแสงไฟหรือแสงอาทิตย์ แมลงเม่าแต่ละคู่เมื่อผสมพันธุ์ แล้วจะเลือกสถานที่ สร้างรังใหม่ ภายใน 2-3 วัน จะเริ่มวางไข่ครั้งแรกๆจะมีไม่กี่ฟอง แต่ต่อไปจะเพิ่มจำนวนไข่มากขึ้นเรื่อยๆ ตลอดอายุการ เจริญเติบโตของมัน ไข่จะฟักเป็นตัวอ่อนภายใน 30-50 วัน และตัวอ่อนจะเจริญเติบโตอย่างรวดเร็ว ซึ่ง ส่วนมาก จะเป็นปลวกในวรรณะทหาร และปลวกงาน แมลงเม่าคู่แรกที่สร้างรังจะเจริญเติบโตเป็นราชาปลวก และราชินี ปลวกมีอายุยืนยาว และมีจำนวนไข่มากกว่า 30,000 ฟองต่อวัน จำนวนประชากรในอาณาจักรหนึ่งๆ มีมาก หรือ น้อยขึ้นอยู่กับภูมิประเทศ และแหล่งอาหาร</li>
        </ul>
      </div>

        <h1 className="font-[1000] text-[#FF0000] text-[1rem] md:text-[1.5rem] text-center">
        การป้องกันและกำจัดปลวกทำได้โดยวิธี
        </h1>
        <div className="flex justify-center items-center gap-4 m-5 md:m-10 md:gap-10 flex-col md:flex-row">
          <Image className="w-50 md:w-60 hover:opacity-90 hover:cursor-pointer" src="/server5.svg" alt="server" width={100} height={100} />
          <Image className="w-50 md:w-60 hover:opacity-90 hover:cursor-pointer" src="/server6.svg" alt="server" width={100} height={100} />
          <Image className="w-50 md:w-60 hover:opacity-90 hover:cursor-pointer" src="/server4.svg" alt="server" width={100} height={100} />
        </div>


        <div className="relative flex flex-col p-10 w-full bg-[#0D98FF] font-[1000]  text-center">
          {/* ข้อความ */}
          <h1 className="text-[#fff] font-extrabold text-[1rem]">
            PST HOME SERVICES CO., LTD.
          </h1>
          <h1 className="text-[#fff] font-black text-[2.5rem] my-1 md:text-[5rem]">
          ไว้ใจให้เราดูแลคุณ
          </h1>
          <h1 className="text-[#fff] font-extrabold text-[1rem]">
          ติดต่อสอบถามเลยตอนนี้
          </h1>
        </div>
    </div>
  );
}