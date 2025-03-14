
import Link from "next/link";
import Image from "next/image";

export default function Buttonline() {

    return (
        <>
            <Link
                href="https://lin.ee/8V7MPcG"
                className="mx-auto border-2 border-black-600 inline-flex p-3 gap-2 font-[900]  justify-center text-center text-black  rounded-full hover:opacity-90 hover:text-[#06C755]"
            >
                <Image alt="" src="/linelogo.svg" className="" width={20} height={40} /> ADD LINE
            </Link>
        </>
    );
}
