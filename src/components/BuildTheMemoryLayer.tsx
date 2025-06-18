import { useState, useEffect, useRef, useCallback } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const BuildTheMemoryLayer = () => {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 500,     // animation duration in ms
            once: true,        // whether animation should happen only once
            offset: 20,       // offset (in px) from the original trigger point
        });
    }, []);
    const features = [
        {
            id: "01.",
            title1: "Your data grows. Supermemory keeps up ",
            title2: "Enterprise-Grade Performance at Any Scale",
            description: "Supermemory is built to handle billions of data points with low-latency retrieval — whether you're indexing documents, video, or structured product data.",
        },
        {
            id: "02.",
            title1: "No heavy lifting. Just smart, connected infrastructure",
            title2: "Seamless Integration Across Teams & Tools",
            description: "Connect directly to your existing stack — from Notion to Google Drive to custom CRMs — with flexible APIs and SDKs that let every team tap into memory instantly.",
        },
        {
            id: "03.",
            title1: "Own your data. Maintain compliance. Stay in control",
            title2: "Secure by Design. Fully Controllable.",
            description: "Deploy Supermemory in the cloud, on-prem, or directly on-device — with full control over where and how your data is stored.",
        },
    ];

    // Throttled scroll handler for better performance
    const handleScroll = useCallback(() => {
        let newActiveIndex = null;

        sectionRefs.current.forEach((ref, index) => {
            if (ref) {
                const rect = ref.getBoundingClientRect();
                // Element is in the top 40% of viewport
                if (rect.top >= 0 && rect.top <= window.innerHeight * 0.4) {
                    newActiveIndex = index;
                }
            }
        });

        setActiveIndex(newActiveIndex);
    }, []);

    // Throttle scroll events for better performance
    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout> | null = null;

        const throttledHandleScroll = () => {
            if (timeoutId === null) {
                timeoutId = setTimeout(() => {
                    handleScroll();
                    timeoutId = null;
                }, 16); // ~60fps
            }
        };


        window.addEventListener("scroll", throttledHandleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => {
            window.removeEventListener("scroll", throttledHandleScroll);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [handleScroll]);

    return (
        <div className="pt-20 bg-[#e1e1e1] md:px-4 pb-20 sm:pt-32 sm:pb-32 lg:pt-40 lg:pb-40 relative overflow-hidden">
            <div className="max-w-7xl mx-auto  space-y-8 sm:space-y-10 lg:space-y-12">
                <div data-aos="fade-up" className="text-black opacity-50   px-4 sm:px-6 lg:px-8  text-xs sm:text-sm tracking-wider text-left">FEATURES  •  FEATURES  •  FEATURES</div>
                <div className="mb-12 sm:mb-12 px-4 sm:px-6 lg:px-8 lg:mb-16 text-left">
                    <h2 data-aos="fade-up" className="text-[1.95rem] mb-[70px] sm:text-4xl xl:text-5xl sm:max-w-[20ch] font-semibold text-gray-900  leading-8 md:leading-12">
                        Build the memory layer your product deserves
                    </h2>

                </div>

                {features.map((feature, index) => (
                    <div

                        key={feature.id}
                        ref={(el: HTMLDivElement | null): void => {
                            sectionRefs.current[index] = el;
                        }}
                        className={`m-4 mb-10 mt-[10px] p-6 md:p-8 lg:p-24   relative transition-colors duration-300 ease-in-out 
              ${activeIndex === index ? "bg-white" : "bg-gray-200"}
              `}
                        style={{
                            clipPath:
                                "polygon(0 0, 92.5% 0%, 100% 40%, 100% 70%, 100% 100%, 0 100%, 0% 70%, 0% 30%)",
                            WebkitClipPath:
                                "polygon(0 0, 92.5% 0%, 100% 40%, 100% 70%, 100% 100%, 0 100%, 0% 70%, 0% 30%)",
                            border: `1px sm:border-2 solid ${activeIndex === index ? '#7c3aed' : '#7e67ff'}`,
                            borderRadius: '8px sm:12px',
                        }}
                    >
                        {/* Purple corner accents */}
                        <div className={`absolute top-0 right-0 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 transition-colors duration-300 ${activeIndex === index ? 'bg-purple-600' : 'bg-purple-500'
                            }`}
                            style={{
                                clipPath: "polygon(70% 0%, 100% 0%, 100% 30%)",
                                WebkitClipPath: "polygon(70% 0%, 100% 0%, 100% 30%)",
                            }}
                        />

                        <div className={`absolute bottom-0 left-0 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 transition-colors duration-300 ${activeIndex === index ? 'bg-purple-600' : 'bg-purple-500'
                            }`}
                            style={{
                                clipPath: "polygon(0% 70%, 0% 100%, 30% 100%)",
                                WebkitClipPath: "polygon(0% 70%, 0% 100%, 30% 100%)",
                            }}
                        />

                        {/* Mobile Layout - Stacked */}
                        <div className="block lg:hidden space-y-4 sm:space-y-6">
                            {/* ID and Logo Row */}
                            <div className="flex items-center gap-4 sm:gap-6">
                                <div className={`text-2xl sm:text-3xl md:text-4xl font-bold transition-colors duration-300 shrink-0 ${activeIndex === index ? "text-purple-600" : "text-gray-400"
                                    }`}>
                                    {feature.id}
                                </div>
                                <img
                                    src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b0655e_logo-border.svg"
                                    loading="lazy"
                                    className="w-auto h-10 sm:h-12 md:h-14 shrink-0"
                                    alt="Logo"
                                />
                            </div>

                            {/* Titles */}
                            <div>
                                <h3 className={`text-xs sm:text-sm uppercase font-light mb-2 transition-colors duration-300 ${activeIndex === index ? "text-gray-900" : "text-gray-700"
                                    }`}>
                                    {feature.title1}
                                </h3>
                                <h3 className={`text-sm sm:text-base md:text-lg uppercase font-semibold transition-colors duration-300 leading-tight ${activeIndex === index ? "text-gray-900" : "text-gray-700"
                                    }`}>
                                    {feature.title2}
                                </h3>
                            </div>

                            {/* Description */}
                            <div>
                                <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${activeIndex === index ? "text-black" : "text-gray-600"}
                                    }`}>
                                    {feature.description}
                                </p>
                            </div>
                        </div>

                        {/* Desktop Layout - Horizontal */}
                        <div className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-12">
                            {/* ID */}
                            <div className={`text-3xl xl:text-4xl 2xl:text-5xl font-bold transition-colors duration-300 shrink-0 ${activeIndex === index ? "text-purple-600" : "text-gray-400"
                                }`}>
                                {feature.id}
                            </div>

                            {/* Logo */}
                            <img
                                src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b0655e_logo-border.svg"
                                loading="lazy"
                                className="w-auto h-14 xl:h-16 2xl:h-20 shrink-0"
                                alt="Logo"
                            />

                            {/* Titles */}
                            <div className="flex-1 min-w-0">
                                <h3 className={`text-xs xl:text-sm 2xl:text-base uppercase font-light mb-2 transition-colors duration-300 ${activeIndex === index ? "text-gray-900" : "text-gray-700"
                                    }`}>
                                    {feature.title1}
                                </h3>
                                <h3 className={`text-lg xl:text-xl 2xl:text-2xl uppercase font-semibold transition-colors duration-300 leading-tight ${activeIndex === index ? "text-gray-900" : "text-gray-700"
                                    }`}>
                                    {feature.title2}
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="flex-1 min-w-0">
                                <p className={`text-sm xl:text-base leading-relaxed transition-colors duration-300 ${activeIndex === index ? "text-black" : "text-gray-600"}
                                    }`}>
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BuildTheMemoryLayer;