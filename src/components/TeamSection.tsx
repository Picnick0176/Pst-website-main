import Image from 'next/image';

const teamMembers = [
    {
        name: "นางสาวพัชนี ก้อนทอง",
        role: "ธุรการ",
        image: "/Members/03.jpg",
    },
    {
        name: "นายสังข์ทอง พันธ์พงษ์",
        role: "หัวหน้าปฎิบัติการ",
        image: "/Members/02.jpg",
    },
    {
        name: " นายวสันต์ จิตบุญ",
        role: "พนักงานปฎิบัติการ",
        image: "/Members/04.jpg",
    },
    {
        name: "นายกิตติธัช ถ่ำแก้ว",
        role: "พนักงานปฎิบัติการ",
        image: "/Members/05.jpg",
    },
    {
        name: "นายรัตน ถ่ำแก้ว",
        role: "พนักงานปฎิบัติการ",
        image: "/Members/07.jpg",
    },

    {
        name: " นาย สุขสวัสดิ์ หรั่งปรางค์",
        role: "พนักงานบริการ",
        image: "/Members/06.jpg",
    },
];

export default function TeamSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 p-5">
            {teamMembers.map((member, index) => (
                <div key={index} className="bg-[#F4F4F4] rounded-xl flex flex-row gap-6 p-5 shadow-lg">
                    <div className="bg-white rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                            className="w-[8rem] h-[8rem] object-cover p-2 rounded-xl"
                            src={member.image}
                            alt={member.name}
                            width={1000} // ปรับขนาดให้ใกล้เคียงกับการแสดงผลจริง
                            height={1000}
                            quality={100}
                        />

                    </div>
                    <div className="text-left flex flex-col justify-center ">
                        <h1 className="text-black text-lg md:text-xl font-bold leading-tigh   text-[1rem]">{member.name}</h1>
                        <p className="text-red-500 text-sm md:text-base font-semibold text-[1rem]">{member.role}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}