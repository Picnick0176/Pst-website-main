export default function Footer() {
    return (
      <footer className=" text-white text-center  bg-[#F0F0F0]">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black  p-6 rounded-lg">
            {/* เกี่ยวกับเรา */}
            <div>
              <h3 className="font-bold text-lg">เกี่ยวกับเรา</h3>
              <p className="text-sm mt-2">
                ให้บริการกำจัดปลวก มด แมลงสาบ ยุง หนู โดยผู้เชี่ยวชาญจากมหาวิทยาลัยเกษตรศาสตร์
                มีประสบการณ์กว่า 10 ปี
              </p>
            </div>
  
            {/* ติดต่อเรา */}
            <div>
              <h3 className="font-bold text-lg">ติดต่อเรา</h3>
              <p className="text-sm mt-2">📞 (02)998-3036 | (02)998-3063</p>
              <p className="text-sm mt-2">📧 psthomeservice.th@gmail.com</p>
            </div>
  
            {/* ออฟฟิศ */}
            <div>
              <h3 className="font-bold text-lg">ออฟฟิศ</h3>
              <p className="text-sm mt-2">
              1/112 ซอยวัชรพล ถนนรามอินทรา แขวงออเงิน เขตสายไหม กรุงเทพ 10220
              </p>
              <p className="text-sm mt-2">⏰ เปิดบริการทุกวัน 8:30-17:30 น.</p>
            </div>
          </div>
          
        </div>
        {/* Copyright & Developer Info */}
        <div className="mt-4 text-sm bg-blue-500 w-full p-4">
            <p>© 2025 PST HOME SERVICES CO., LTD.</p>
            <p>
              Web developer:{" "}
              <a
                href="#"
                className="underline hover:text-gray-200"
              >
                Patsakorn Kerdsomboon
              </a>
            </p>
          </div>
      </footer>
    );
  }
  