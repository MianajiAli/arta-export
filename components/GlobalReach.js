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
        fill: countryCode === "IR" ? "orange" : color,
        fillOpacity: countryValue ? 0.8 : 0.1,
        stroke: "black",
        strokeWidth: .7,
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
    const getHref = ({ countryName }) => ({
        href: `https://en.wikipedia.org/wiki/${countryName}`,
        target: "_blank",
    });
    return (
        <div className="relative w-full h-[400px] z-2 ">
            <div className="top-0 -left-32 sm:-left-28 md:left-0 lg:left-96 absolute scale-[250%] "> {/* Adjust size here */}
                <WorldMap
                    color="#FFD580"
                    backgroundColor="none"
                    value-suffix="people"
                    styleFunction={getStyle}
                    size="responsive"  // Use responsive size
                    data={data}
                    tooltipTextColor="none"
                    tooltipBgColor="none"
                    hrefFunction={getHref}
                />
            </div>
        </div>
    );
}
