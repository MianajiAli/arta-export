import { GiCargoCrate, GiCargoShip, GiWoodenCrate, GiShakingHands } from "react-icons/gi";
import ServiceCard from './ServiceCard';  // Import the ServiceCard component
import Link from 'next/link';  // Import the Link component

const About = () => {
    return (
        <div className="px-[10%] flex flex-col gap-3 bg-gradient-to-b from-back via-back to-back/0 z-[6]" dir="rtl">
            <h2 className="text-text1">خدمات شرکت ما</h2>
            <p className="text-text2">
                آرتا اکسپورت به عنوان یک شرکت معتبر در زمینه صادرات محصولات ایرانی فعالیت می‌نماید. این شرکت با هدف ارتقاء و توسعه بازارهای بین‌المللی برای محصولات ایرانی و نیز ارزیابی و انتخاب کیفیت بالا، به عنوان یک پیشرو در صنعت صادرات ایران عمل می‌نماید.🌍
            </p>
            <div className=" my-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mx-auto gap-5">
                <ServiceCard
                    Icon={GiCargoCrate}
                    description="صادرات کالا"
                />
                <ServiceCard
                    Icon={GiCargoShip}
                    description="واردات کالا"
                />
                <ServiceCard
                    Icon={GiWoodenCrate}
                    description="ترخیص کالا از گمرک"
                />
                <ServiceCard
                    Icon={GiShakingHands}
                    description="مشاوره بازرگانی"
                />
            </div>
            <p className="text-text2 w-full text-center mt-5">
                ما به شما کمک می کنیم تا کسب و کار خود را شکوفا کنید. با ما
                <Link href="/contact" className="underline mx-1 text-gray-600 hover:text-text1 cursor-pointer">
                    تماس بگیرید.
                </Link>
            </p>
        </div>
    );
};

export default About;
