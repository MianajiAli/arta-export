import Image from "next/image";

const Hero = () => {
    return (
        <div className="w-full min-h-[80vh] h-[400px] relative flex justify-center items-center text-gray-700 gap-10">
            <div className='w-60 h-60 '>

                <img src="/images/cargo-iran2.jpg" alt="" className=" object-contain  rounded-xl shadow-xl " />
            </div>
            <div className=" flex flex-col h-52 gap-5" dir="rtl">
                <h1 >شرکت آرتا اکسپورت</h1>
                <h2>شرکت آرتا اکسپورت</h2>
            </div>
        </div>
    );
};

export default Hero;