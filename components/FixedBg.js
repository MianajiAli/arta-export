// components/FixedBackgroundComponent.js

const FixedBackgroundComponent = () => {
    return (
        <div className="relative h-[250px] my-32 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('/images/group.jpg')` }}></div>
            <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50 p-8">
                <div className="text-center text-white">
                    <h1 className="text-3xl font-bold mb-4">تجارت، تبادل کالا و خدمات برای سود است</h1>
                    <p>با آرتا اکسپورت همراه باشید</p>
                </div>
            </div>
        </div>
    );
};

export default FixedBackgroundComponent;
