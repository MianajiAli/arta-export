const ServiceCard = ({ Icon, description }) => {
    return (
        <div className="flex flex-col w-60 min-h-40 border-[2px] border-text2 text-text2  border-solid p-4 rounded-xl gap-3 justify-center items-center">
            <Icon size={60} />
            <p>{description}</p>
        </div>
    );
};

export default ServiceCard;
