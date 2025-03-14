"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar (Fixed) */}
      <nav className="hidden md:flex flex-col fixed top-0 left-0 w-full z-50 bg-white shadow-md">
  {/* Top Logo */}
  <div className="Navtop w-full h-14 flex justify-center items-center">
    <Image src="/logo.svg" alt="Company Logo" width={25} height={25} />
  </div>

  {/* Navigation Bar */}
  <div className="flex gap-4 bg-[#0D92F4] w-full h-14 text-white justify-center items-center">
    {[
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Profile", path: "/profile" },
      { name: "Our Customers", path: "/customer" },
      { name: "Contact", path: "/#contact" },
    ].map((item, index) => (
      <React.Fragment key={item.path}>
        <Link
          href={item.path}
          className={`relative px-4 py-2 hover:text-[#757575] transition text-sm md:text-base lg:text-lg ${
            pathname === item.path
              ? "after:absolute after:w-full after:h-[3px] after:bg-white after:bottom-0 after:left-0"
              : ""
          }`}
          onClick={closeMenu}
        >
          {item.name}
        </Link>
        {index < 4 && <span className="text-white mx-2">|</span>}
      </React.Fragment>
    ))}

    {/* Call Button */}
    <Link
      href="tel:+662998-3036"
      className="flex items-center rounded-full gap-2 px-3 py-1 bg-[#7BE43C] text-white text-sm md:text-base lg:text-lg font-medium hover:bg-[#6AC832] transition"
    >
      <Image src="/Call.svg" alt="Phone Icon" width={15} height={15} />
      โทร
    </Link>
    <Link
      href="https://lin.ee/8V7MPcG"
      className="flex items-center rounded-full gap-2 px-3 py-1 border border-[#6AC832] text-[#6AC832] text-sm md:text-base lg:text-lg font-medium hover:text-white hover:bg-[#6AC832] transition"
    >
      <Image src="/line.svg" alt="Line Icon" width={15} height={15} />
      ADD LINE
    </Link>
  </div>
</nav>


      {/* Mobile Navbar (ไม่ Fixed) */}
      <nav className="md:hidden bg-white shadow-md p-4 border-b-4 border-[#0D92F4]">
        <div className="flex items-center justify-between">
          <Image src="/logo.svg" alt="Company Logo" width={25} height={25} />
          <button onClick={toggleMenu}>
            <Image
              src={isOpen ? "/close.svg" : "/menu.svg"}
              alt="Menu"
              width={25}
              height={25}
            />
          </button>
        </div>

        {isOpen && (
          <div className="flex flex-col gap-5 py-4">
            <Link onClick={closeMenu} href="/">
              Home
            </Link>
            <Link onClick={closeMenu} href="/about">
              About
            </Link>
            <Link onClick={closeMenu} href="/profile">
              Profile
            </Link>
            <Link onClick={closeMenu} href="/customer">
              Our Customers
            </Link>
            <Link onClick={closeMenu} href="/#contact">
              Contact me
            </Link>
            <div className="flex gap-2">
              <Link
                href="tel:+662998-3036"
                className="flex items-center rounded-full gap-2 px-3 py-1 bg-[#7BE43C] text-white text-sm font-medium hover:bg-[#6AC832] transition"
              >
                <Image src="/Call.svg" alt="Phone Icon" width={15} height={15} />
                โทร
              </Link>
              <Link
                href="https://lin.ee/8V7MPcG"
                className="flex items-center rounded-full gap-2 px-3 py-1 border border-[#6AC832] text-[#6AC832] text-sm font-medium hover:text-white hover:bg-[#6AC832] transition"
              >
                <Image src="/line.svg" alt="Line Icon" width={15} height={15} />
                ADD LINE
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* ป้องกัน Navbar บังเนื้อหา ทุกขนาดจอ */}
      <div className="md:pt-[105px] pt-[0px]"></div>
    </>
  );
}
