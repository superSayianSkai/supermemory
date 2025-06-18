import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const FeaturesFeatures = () => {


    useEffect(() => {
        AOS.init({
            duration: 500,     // animation duration in ms
            once: true,        // whether animation should happen only once
            offset: 20,       // offset (in px) from the original trigger point
        });
    }, []);
    return (
        <div className="relative pt-20 md:px-8 pb-20 border-t bg-[#e1e1e1] border-gray-300 sm:pt-32 sm:pb-32 lg:pt-40 lg:pb-40">

            <img src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06569_big-symbol.svg" loading="lazy" className="absolute opacity-30 z-0 bottom-[110px] left-[-15.1rem]" />

            <img
                src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06561_hero-grid.svg"
                alt="..."
                className="absolute z-0 opacity-5 pointer-events-none object-[50%_100%] w-[105rem] mx-auto inset-x-0 top-0"
            />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                <div data-aos="fade-up" className="text-gray-600 text-xs md:text-[.8rem]  tracking-widest font-medium mb-8 uppercase">
                    FEATURES • FEATURES • FEATURES
                </div>
                <section className="py-4">
                    <div className="max-w-7xl mx-auto grid gap-x-6 gap-y-6 grid-rows-[auto] grid-cols-1 md:grid-cols-[0.5fr_1fr] auto-cols-fr">
                        {/* Left Heading */}
                        <div className="flex items-start mt-[2rem] justify-start text-3xl md:text-[3rem] font-bold leading-tight text-gray-900">
                            It just clicks<br />with your stack
                        </div>

                        {/* Right Grid Cards */}
                        <div className="flex flex-col sm:grid w-[100%] sm:grid-cols-2 gap-5 max-sm:mt-[5rem]">
                            {/* Card 1 */}
                            <div style={{
                                clipPath:
                                    "polygon(0 0, 75% 0, 100% 25%, 100% 70%, 100% 100%, 0 100%, 0% 80%, 0% 30%)",
                                WebkitClipPath:
                                    "polygon(0 0, 75% 0%, 100% 25%, 100% 70%, 100% 100%, 0 100%, 0% 80%, 0% 30%)",
                                border: `1px sm:border-2 solid`,
                                borderRadius: '8px sm:12px',
                            }} className="bg-white py-12 px-8 space-y-8 shadow-sm">
                                <img src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06565_icon-features-grid_03.png" loading="lazy" alt="" className="w-[4.5rem] h-[4.5rem]" />
                                <h1 className="text-[1rem] text-gray-500 uppercase">Interoperability</h1>
                                <h4 className="font-bold mb-2 text-black text-2xl">Model-interoperable APIs</h4>
                                <p className="text-md text-black">Supermemory works with any LLM provider. So you can keep switching, without lock-in.
                                    Switch between models. keep your memory.</p>
                            </div>

                            {/* Card 2 */}
                            <div style={{
                                clipPath:
                                    "polygon(0 0, 75% 0, 100% 25%, 100% 70%, 100% 100%, 0 100%, 0% 80%, 0% 30%)",
                                WebkitClipPath:
                                    "polygon(0 0, 75% 0%, 100% 25%, 100% 70%, 100% 100%, 0 100%, 0% 80%, 0% 30%)",
                                border: `1px sm:border-2 solid`,
                                borderRadius: '8px sm:12px',
                            }} className="bg-white py-12 px-8 space-y-8 shadow-sm">
                                <img src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06563_icon-features-grid_02.png" loading="lazy" alt="" className="w-[4.5rem] h-[4.5rem]" />
                                <h1 className="text-[1rem] text-gray-500 uppercase">Performance</h1>
                                <h4 className="font-bold mb-2 text-black text-2xl">Sub-400ms latency at scales</h4>
                                <p className="text-md text-black">Supermemory is built for speed and scale. We re-imagined RAG to be faster and more efficient.</p>
                            </div>

                            {/* Card 3 (spans 2 columns like the graph one) */}
                            <div style={{
                                clipPath:
                                    "polygon(0 0, 75% 0, 100% 25%, 100% 70%, 100% 100%, 0 100%, 0% 80%, 0% 30%)",
                                WebkitClipPath:
                                    "polygon(0 0, 75% 0%, 100% 25%, 100% 70%, 100% 100%, 0 100%, 0% 80%, 0% 30%)",
                                border: `1px sm:border-2 solid`,
                                borderRadius: '8px sm:12px',
                            }} className="bg-white grid grid-cols-2 px-8 pt-20 pb-10 rounded-lg shadow-sm col-span-2">
                                <div className="space-y-10">
                                    <img src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06567_icon-features-grid_05.png" loading="lazy" alt="" className="w-[4.5rem] h-[4.5rem]" />
                                    <h1 className="text-[1rem] text-gray-500 uppercase">Interoperability</h1>
                                    <h4 className="font-bold mb-2 text-black text-2xl">Model-interoperable APIs</h4>
                                    <p className="text-md text-black">Supermemory works with any LLM provider. So you can keep switching, without lock-in.
                                        Switch between models. keep your memory.</p>
                                </div>

                                <div className="flex flex-col flex-wrap justify-center items-center text-center h-full gap-x-10 gap-y-10 ">
                                    <div className="max-w-[26ch] space-y-15">
                                        <div className="text-[.7rem] uppercase text-gray-500">comparison of evaluation metrics: <span className="text-blue-400">supermemory</span> vs major memory provide</div>
                                        <img src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06568_Frame%2020.svg" loading="lazy" />
                                    </div>
                                </div>

                            </div>

                            {/* Card 4 */}
                            <div style={{
                                clipPath:
                                    "polygon(0 0, 75% 0, 100% 25%, 100% 70%, 100% 100%, 0 100%, 0% 80%, 0% 30%)",
                                WebkitClipPath:
                                    "polygon(0 0, 75% 0%, 100% 25%, 100% 70%, 100% 100%, 0 100%, 0% 80%, 0% 30%)",
                                border: `1px sm:border-2 solid`,
                                borderRadius: '8px sm:12px',
                            }} className="bg-white py-12 px-8 space-y-8 shadow-sm">
                                <img src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06564_icon-features-grid_04.png" loading="lazy" alt="" className="w-[4.5rem] h-[4.5rem]" />
                                <h1 className="text-[1rem] text-gray-500 uppercase">Interoperability</h1>
                                <h4 className="font-bold mb-2 text-black text-2xl">Model-interoperable APIs</h4>
                                <p className="text-md text-black">Supermemory works with any LLM provider. So you can keep switching, without lock-in.
                                    Switch between models. keep your memory.</p>
                            </div>

                            {/* Card 2 */}
                            <div style={{
                                clipPath:
                                    "polygon(0 0, 75% 0, 100% 25%, 100% 70%, 100% 100%, 0 100%, 0% 80%, 0% 30%)",
                                WebkitClipPath:
                                    "polygon(0 0, 75% 0%, 100% 25%, 100% 70%, 100% 100%, 0 100%, 0% 80%, 0% 30%)",
                                border: `1px sm:border-2 solid`,
                                borderRadius: '8px sm:12px',
                            }} className="bg-white py-12 px-8 space-y-8 shadow-sm">
                                <div className="flex max-sm:flex-col justify-between md:items-center w-full gap-x-2 gap-y-4">
                                    <img src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06562_icon-features-grid_01.png" loading="lazy" alt="" className="w-[4.5rem] h-[4.5rem]" />
                                    <img src=" https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06566_Logos.svg " loading="lazy" alt="" className="md:w-auto md:h-[1.875rem] mr-[1rem]" />
                                </div>
                                <h1 className="text-[1rem] text-gray-500 uppercase">Performance</h1>
                                <h4 className="font-bold mb-2 text-black text-2xl">Sub-400ms latency at scales</h4>
                                <p className="text-md text-black">Supermemory is built for speed and scale. We re-imagined RAG to be faster and more efficient.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FeaturesFeatures;