const ServiceCard = ({ Icon, description }) => {
    return (
        <div className="flex flex-col w-60 min-h-40 border-[2px] border-primary text-primary border-solid p-4 rounded-xl gap-3 justify-center items-center">
            <Icon className="text-primary" size={60} /> {/* اضافه کردن رنگ بنفش به آیکون */}
            <p className="text-primary">{description}</p>
        </div>
    );
};

export default ServiceCard;
