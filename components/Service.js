import { AiFillDingtalkCircle, AiFillCustomerService, AiFillCar } from "react-icons/ai";
import ServiceCard from './ServiceCard';  // Import the ServiceCard component

const About = () => {
    return (
        <div className="px-[10%] flex flex-col gap-3" dir="rtl">
            <h2 className="text-text1">خدمات آرتا اکسپورت</h2>
            <p className="text-text2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.</p>
            <div className="w-full flex gap-5 justify-center items-center flex-wrap  mt-5">
                <ServiceCard
                    Icon={AiFillDingtalkCircle}
                    description="توضیحات مربوط به این سرویس خاص در اینجا قرار می‌گیرد."
                />
                <ServiceCard
                    Icon={AiFillCustomerService}
                    description="پشتیبانی مشتریان و خدمات پس از فروش."
                />
                <ServiceCard
                    Icon={AiFillCar}
                    description="حمل و نقل سریع و مطمئن."
                />
                <ServiceCard
                    Icon={AiFillCustomerService}
                    description="پشتیبانی مشتریان و خدمات پس از فروش."
                />
            </div>
        </div>
    );
};

export default About;
