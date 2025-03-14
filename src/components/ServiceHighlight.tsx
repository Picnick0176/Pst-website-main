import React from "react";

const ServiceHighlight = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 rounded-2xl">
      <h2 className="text-3xl font-bold text-black mb-4 ">เหตุผลที่ควรเลือกเรา</h2>
      <ul className="space-y-2 text-left">
        <li className="flex items-center"><span className="text-green-500 mr-2">✅</span>ใช้สารเคมีที่มีมาตรฐานและปลอดภัย</li>
        <li className="flex items-center"><span className="text-green-500 mr-2">✅</span>มีทีมงานมืออาชีพที่ผ่านการฝึกอบรม</li>
        <li className="flex items-center"><span className="text-green-500 mr-2">✅</span>ให้บริการตามแผนงานที่กำหนดและตรวจสอบผลลัพธ์ทุกสัปดาห์</li>
        <li className="flex items-center"><span className="text-green-500 mr-2">✅</span>รับประกันความพึงพอใจ และให้บริการแก้ไขปัญหาทันทีหากพบปลวกหรือหนูในอาคารอีก</li>
      </ul>
      <p className="mt-4 text-gray-700 text-left">
        หากคุณต้องการบริการกำจัดปลวกและหนูที่มีประสิทธิภาพ ติดต่อเราได้ที่
        <span className="font-bold text-blue-600"> โทร. 0-2998-3036</span> เพื่อรับคำปรึกษาและประเมินพื้นที่ฟรี!
      </p>
    </div>
  );
};

export default ServiceHighlight;
