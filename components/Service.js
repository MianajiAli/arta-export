import { GiCargoCrate, GiCargoShip, GiWoodenCrate, GiShakingHands } from "react-icons/gi";
import ServiceCard from './ServiceCard';  // Import the ServiceCard component

const About = () => {
    return (
        <div className="px-[10%] flex flex-col gap-3" dir="rtl">
            <h2 className="text-text1">خدمات ما</h2>
            <p className="text-text2">
                ما با افتخار خدمات واردات و صادرات کامل و حرفه‌ای ارائه می‌دهیم.
                تیم ما تخصص لازم را برای ارسال و دریافت کالاهای شما به و از بازارهای بین‌المللی داراست.
                ما از تمامی مراحل شامل بسته‌بندی، حمل‌ونقل و مستندات لازم برای واردات و صادرات به کشورهای خارجی پشتیبانی می‌کنیم.
                هدف ما، رساندن و دریافت محصولات شما با بالاترین سطح کیفیت و اطمینان است.
            </p>
            <div className="w-full flex gap-5 justify-center items-center flex-wrap mt-5">
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

        </div>
    );
};

export default About;
