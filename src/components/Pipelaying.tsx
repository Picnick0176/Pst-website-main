import Image from "next/image";
type FeatureProps = {
  text: string;
};


export default function ServiceSection() {
  return (
    <div className="bg-[#0D98FF] w-full text-white p-10 text-center flex flex-col items-center">
      <h2 className="text-3xl font-bold">บริการรับวางท่อโดยช่างมืออาชีพ</h2>
      <p className="mt-2 text-black">การป้องกันโดยการวางท่อในกรณีที่สร้างอาคารโดยมีการยกพื้นสูงขึ้น</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 ">
        <div data-aos="fade-up" className="flex flex-col gap-5 ">
          <Feature text="ใช้ท่อ PE ขนาด 20mm" />
          <Feature text="หัวสเปย์ครึ่งวงกลม" />
          <Feature text="ใช้งานได้อย่างมั่นใจ" />
          <Feature text="เข็มขัดอลูมิเนียม" />
        </div>
        <div data-aos="fade-up" className="flex flex-col gap-5">
          <Feature text="อุปกรณ์คุณภาพสูง" />
          <Feature text="ให้บริการโดยช่างผู้มีประสบการณ์" />
          <Feature text="ให้คำปรึกษาฟรี" />
          <Feature text="ใช้งานได้อย่างมั่นใจ" />
        </div>
      </div>
    </div>
  );
}

function Feature({ text }: FeatureProps) {
  return (
    <div className="flex items-center space-x-2">
      <Image className="w-[30px]" src="/chack.svg" alt="chack Icon" width={100} height={100} />
      <span className="text-lg font-semibold">{text}</span>
    </div>
  );
}
