import { GiCargoCrate, GiCargoShip, GiWoodenCrate, GiShakingHands } from "react-icons/gi";
import ServiceCard from './ServiceCard';  // Import the ServiceCard component

const About = () => {
    return (
        <div className="px-[10%] flex flex-col gap-3 bg-gradient-to-b from-back via-back to-back/0 z-[6] " dir="rtl">
            <h2 className="text-text1">خدمات شرکت ما</h2>
            <p className="text-text2">
                ما با افتخار خدمات واردات و صادرات کامل و حرفه‌ای ارائه می‌دهیم.
                تیم ما تخصص لازم را برای ارسال و دریافت کالاهای شما به و از بازارهای بین‌المللی داراست.
                ما از تمامی مراحل شامل بسته‌بندی، حمل‌ونقل و مستندات لازم برای واردات و صادرات به کشورهای خارجی پشتیبانی می‌کنیم.
                هدف ما، رساندن و دریافت محصولات شما با بالاترین سطح کیفیت و اطمینان است.
            </p>
            <div className="w-full my-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 *:mx-auto gap-5 ">
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
            <p className="text-text2 w-full text-center mt-5    ">

                ما به شما کمک می کنیم تا کسب و کار خود را شکوفا کنید. با ما
                <b className="underline mx-1 text-text1/70 cursor-pointer">
                    تماس بگیرید.
                </b>
            </p>
        </div>
    );
};

export default About;
