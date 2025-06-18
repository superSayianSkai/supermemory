import {  useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const ProductContext = () => {

        useEffect(() => {
            AOS.init({
                duration: 500,     // animation duration in ms
                once: true,        // whether animation should happen only once
                offset: 20,       // offset (in px) from the original trigger point
            });
        }, []);
    const handleCopy = () => {
        const codeText = `import OpenAI from "openai"

const client = new OpenAI({
  baseURL: "https://api.supermemory.ai/v3"
  // https://api.openai.com/v1/
})`;
        navigator.clipboard.writeText(codeText);
    };

    return (
        <div className="space-y-5 bg-[#21252a pt-10  w-full">
            <div className="bg-[#21252a] px-4 md:px-10">
                <div data-aos="fade-up" className="flex items-center max-sm:rounded-xl justify-center px-2 pt-2 md:px-4 md:pt-4 w-[100%] max-w-7xl  mx-auto  bg-[linear-gradient(200deg,_#a4e8f5,_#267ffa_61%,_#1b335500)]">

                    <div  className="bg-[#21252a] shawdow-xl w-full max-w-7xl border border-[#383838] rounded-2xl md:rounded-tr-none md:[clip-path:polygon(0_0,calc(100%-80px)_0,100%_80px,100%_100%,0_100%)] shadow-[0_2px_20px_#00000040,inset_0_0_0_4px_#06060640,inset_0_4px_2px_#54545440]">
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-10 md:py-16">
                            {/* Left Column */}
                            <div className="flex flex-col gap-6">
                                <div className="text-[.8rem] md:text-md uppercase opacity-40 tracking-wider">
                                    product • product • product
                                </div>

                                <h2 className="text-4xl lg:text-[3rem] leading-tight font-medium tracking-tighter md:my-4">
                                    Add context to your <br className="hidden md:block" />
                                    agentic apps with few <br className="hidden md-block" />
                                    lines of code<br className="hidden md-block" />
                                </h2>

                                <div className="space-y-2 text-gray-300 text-sm sm:text-base leading-snug">
                                    <p className="text-[1rem]">
                                        Supermemory provides SDKs to make integration as simple as possible
                                    </p>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="relative space-y-10 flex items-center justify-center flex-col">
                                <div className="flex justify-center items-center gap-[0.25rem] bg-[#090b0e] rounded-[1.25rem]  p-1 overflow-hidden">
                                    <div className="bg-[#21252a] border border-[#383838] text-white rounded-xl p-3 cursor-pointer">TypeScript</div>
                                    <div className="bg-[#21252a00] border border-[#38383800] rounded-[1rem] px-4 py-3 text-[#b0b0b0] transition-all duration-200 ease-in-out cursor-pointer hover:bg-[#acaaaa34]" >Python</div>
                                </div>
                                <div className="relative w-full overflow-x-auto text-base max-w-full p-6 sm:p-10 lg:p-8 border border-[#383838] rounded-[1.75rem] font-mono shadow-[inset_0_0_0_6px_#06060640] bg-[#1a1a1a]">
                                    <button
                                        onClick={handleCopy}
                                        className="absolute top-4  right-4 hidden sm:flex items-center gap-2 text-sm px-3 py-1 text-white hover:bg-white/10 border border-white/20 rounded-sm"
                                    >
                                        <i className="bi bi-copy "></i>
                                        Copy
                                    </button>

                                    {/* Code Content */}
                                        <div className="text-[1.25rem] md:p-6">
                                            <span className="text-[#ff4d8d]"> npm</span> install <span className="bg-[linear-gradient(135deg,_#a4e8f5,_#cdf2fa_14%,_#2782ff_66%,_#7e67ff_91%)] bg-clip-text text-transparent">supermemory</span>
                                        </div>
                                
                                </div>

                                {/* CTA Button */}

                                <a
                                    href="https://console.supermemory.ai/login"
                                    target="_blank"
                                    className="button-wrapper w-inline-block w-[100%] md:w-[50%] bg-[#21252a] max-sm:-mt-7 border-[#383838] rounded-[1.125rem] shadow-[0_2px_20px_#00000040,inset_0_0_0_4px_#06060640,inset_0_4px_2px_#54545440]"
                                >
                                    <div className="button navbar text-[1.2rem] sm:text-lg px-6 py-3 text-center bg-white text-black rounded-md shadow-md">
                                        <div>
                                            Start Building
                                            <sup className="text-[1rem]">Docs</sup>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductContext