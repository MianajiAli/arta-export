"use client"
import WorldMap from "react-svg-worldmap";

export default function GlobalReach() {
    const getStyle = ({
        countryValue,
        countryCode,
        minValue,
        maxValue,
        color,
    }) => ({
        fill: countryCode === "IR" ? "#9500ff" : color,
        fillOpacity: countryValue ? 0.8 : 0.1,
        stroke: "black",
        strokeWidth: .6,
        strokeOpacity: 0.2,
        cursor: "pointer",
    });

    const data = [
        { country: "CN", value: "China is a major destination for Iranian crude oil and petrochemical products." },
        { country: "AE", value: "UAE serves as a key trading hub and is a significant market for Iranian non-oil exports." },
        { country: "IN", value: "India imports a variety of Iranian products, including oil, chemicals, and agricultural products." },
        { country: "TR", value: "Turkey imports Iranian natural gas, petroleum products, and various industrial goods." },
        { country: "KR", value: "South Korea is a notable importer of Iranian petrochemicals and oil products." },
        { country: "IQ", value: "Iraq imports a range of Iranian goods, including construction materials and machinery." },
        { country: "JP", value: "Japan sources Iranian oil and gas as part of its energy needs." },
        { country: "IR", value: "Includes various other countries with smaller shares of Iranian exports." } // For Iran itself
    ];

    return (
        <div className="relative w-full h-[400px] z-2  overflow-hidden ">
            <div className="flex justify-center items-center w-full h-[400px] z-2  overflow-hidden ">

                <div className="top-0   absolute scale-[150%] "> {/* Adjust size here */}
                    <WorldMap
                        color="#ba59ff"
                        backgroundColor="none"
                        styleFunction={getStyle}
                        size="responsive"  // Use responsive size
                        data={data}
                        tooltipTextColor="none"
                        tooltipBgColor="none"
                        borderColor="#fff"
                    />
                </div>
            </div>
            <div className="z-3 top-0 w-full h-full bg-black bg-opacity-50"></div>
        </div>
    );
}
