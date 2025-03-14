"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
const images = [
    "/work/687237_0.jpg",
    "/work/687235_0.jpg",
    "/work/687247_0.jpg",
];

export default function Slideshow() {
    const [index, setIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mx-auto px-10">
            {loaded && images[index] ? (
                <Image
                    className="mx-auto  my-5 rounded-md w-[500px]"
                    src={images[index]}
                    alt="Slideshow"
                    width={500} // Set the width to an appropriate value
                    height={300} // Set the height to an appropriate value
                />

            ) : (
                <p>Loading image...</p>
            )}
        </div>
    );

}
