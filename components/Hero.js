import Image from "next/image";

const Hero = () => {
    return (
        <div className="w-full relative items-center gap-10">
            <div className='w-full min-h-[100px] h-[35vh] md:h-[65vh] relative'>
                <Image
                    src="/images/cargo-image3.png"
                    alt="Cargo Image"
                    fill
                    priority={true}
                    style={{ objectFit: 'cover' }}
                    className="z-1 absolute"
                />
                <div className="z-2 w-full h-full absolute bg-black opacity-45"></div>
                <div className="z-3 absolute w-full h-full flex justify-center items-center">
                    <h1 className="mt-24 text-white rounded-lg p-3">
                        شرکت آرتا اکسپورت
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
