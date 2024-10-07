"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
    "/images/hero1.webp",
    // "/images/08.webp",
    // "/images/03.webp",
    // "/images/cargo-image3.png",
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    // Handler for next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Handler for previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="w-full relative items-center gap-10">
            <div className='w-full h-[130px] md:h-[400px] relative'>
                <Image
                    src={images[currentIndex]}
                    alt="Cargo Image"
                    fill
                    priority={true}
                    style={{ objectFit: 'cover' }}
                    className="z-1 absolute"
                />
                {/* <div className="z-2 w-full h-full absolute bg-black opacity-45"></div> */}
                <div className="z-3 absolute w-full h-full flex justify-center items-center">
                    {/* <h1 className="mt-24 text-white rounded-lg p-3">
                    </h1> */}
                </div>

                {/* Navigation Buttons */}
                <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10">
                    <button onClick={prevImage} className="text-white bg-black/30 rounded-full p-2">
                        &#10094; {/* Left Arrow */}
                    </button>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10">
                    <button onClick={nextImage} className="text-white bg-black/30 rounded-full p-2">
                        &#10095; {/* Right Arrow */}
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="absolute bottom-4 w-full flex justify-center space-x-2 z-10">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'} cursor-pointer`}
                            onClick={() => setCurrentIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
