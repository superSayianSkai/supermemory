import { useEffect, useRef, useState } from "react";
import { CarouselData } from "../data/CarouselData";

const Carousels = () => {
    const [translateX, setTranslateX] = useState(0);
    const itemWidth = 350; // px
    const gap = 16; // Tailwind gap-4 = 16px
    const totalItemWidth = itemWidth + gap;
    const duplicatedData = [...CarouselData, ...CarouselData]; // for seamless wrap
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const totalWidth = duplicatedData.length * totalItemWidth;

        const interval = setInterval(() => {
            setTranslateX(prev => {
                // Keep it moving forever — reset only when entire duplicate has left view
                const nextX = prev - 1;
                return Math.abs(nextX) >= totalWidth / 2 ? 0 : nextX;
            });
        }, 16); // ~60fps

        return () => clearInterval(interval);
    }, [duplicatedData.length, totalItemWidth]);

    return (
        <div className="bg-[#1c2026] -mt-[110px] p-4 h-[240px] max-w-[1400px]  overflow-clip">
            <div className="relative overflow-clip h-full">
                {/* Enhanced Left Shadow */}


                <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none 
                                shadow-[inset_40px_0_30px_25px_#1c2026]" />

                {/* Enhanced Right Shadow */}
                <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none 
                                shadow-[inset_-40px_0_30px_25px_#1c2026]" />

                <div
                    ref={wrapperRef}
                    className="flex gap-4 h-full"
                    style={{
                        transform: `translateX(${translateX}px)`,
                        transition: "transform 0.016s linear",
                        width: `${duplicatedData.length * totalItemWidth}px`
                    }}
                >
                    {duplicatedData.map(({ title, items }, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 bg-[#1c2026] w-[350px] p-8 space-y-10 text-white border-[3px] border-[#383838] rounded-2xl shadow-[0_2px_20px_#00000040,inset_0_0_0_4px_#06060640,inset_0_4px_2px_#54545440]"
                        >
                            <h3 className="font-medium mb-3 text-base">{title}</h3>
                            <ul className="space-y-2 list-none">
                                {items.map((item, i) => (
                                    <li key={i} className="text-[.8rem] list-none flex items-center">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousels;