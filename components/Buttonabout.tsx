"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Buttonabout() {

    return (
        <>
            <Link
                href="/about"
                className="inline-flex w-50 px-4 py-2 justify-center text-center text-white bg-gradient-to-r from-[#0D92F4] to-[#7AC7FF] rounded-md hover:opacity-90"
            >
                คลิกดูรายละเอียดเพิ่มเติม
            </Link>
        </>
    );
}
