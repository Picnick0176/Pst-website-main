"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Admin() {
    const [showList, setShowList] = useState(false);

    return (
        <div className="fixed bottom-4 right-4 flex flex-col items-center z-100">
            <button
                onClick={() => setShowList(!showList)}
                className="transition-transform duration-200 hover:scale-110"
            >
                <Image  src="/admin.svg" alt="" width={100} height={100} quality={100} />
            </button>
            {showList && (
                <div id="contectlist" className="absolute bottom-[100%] flex flex-col items-center gap-2 bg-white p-2 rounded-lg shadow-lg">
                    <Link href="https://lin.ee/8V7MPcG" className="flex gap-3 items-center">
                        <Image className="w-[2rem]" src="/line.svg" alt="" width={100} height={100} />
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=61574275192661" className="flex gap-3 items-center">
                        <Image className="w-[2rem]" src="/fb.svg" alt="" width={100} height={100} />
                    </Link>
                    <Link href="tel:+662998-3036" className="flex gap-3 items-center">
                        <Image className="w-[2rem]" src="/tel.svg" alt="" width={100} height={100} />
                    </Link>
                </div>
            )}
        </div>
    );
}