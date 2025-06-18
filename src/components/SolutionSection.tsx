import { useState, useEffect} from "react";

const SolutionSection: React.FC = () => {
    const [state, setState] = useState("copy");
    const handleCopy = () => {
        const codeText = `import OpenAI from "openai"

const client = new OpenAI({
  baseURL: "https://api.supermemory.ai/v3"
  // https://api.openai.com/v1/
})`;
        navigator.clipboard.writeText(codeText);
        setState("copied!");
        setTimeout(() => {
            setState("copy")
        }, 1000)
    };


    return (
        <div className="space-y-5 mt-[150px] md:mt-[400px] w-full">
            <div data-aos="fade-up" className="uppercase text-xs text-gray-500 leading-5 text-center tracking-widest">
                solution • solution • solution
            </div>

            <div data-aos="fade-up" className="text-[1rem]  w-[90%] md:w-[100%] sm:flex sm:flex-col mx-auto sm:text-base tracking-tight leading-relaxed text-center mb-12">
                <span>We’ve seen what it’s like to build memory infrastructure the</span>
                <span>hard way — so we built supermemory to make it disappear.</span>
            </div>

            <div className="flex items-center justify-center mx-2 md:px-4 pt-2 md:pt-10 rounded-xl md:rounded-none md:max-w-7xl  md:mx-auto  bg-[linear-gradient(200deg,_#a4e8f5,_#267ffa_61%,_#1b335500)]">

                <div className="bg-[#21252a] mx-2 shawdow-xl w-full md:max-w-7xl border border-[#383838] rounded-xl  md:rounded-tr-none md:[clip-path:polygon(0_0,calc(100%-80px)_0,100%_80px,100%_100%,0_100%)] shadow-[0_2px_20px_#00000040,inset_0_0_0_4px_#06060640,inset_0_4px_2px_#54545440]">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-10 md:py-16">
                        {/* Left Column */}
                        <div className="flex flex-col gap-6 ">
                            <div className="text-xs uppercase opacity-40 tracking-wider">
                                product • product • product
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-[3rem] leading-8 md:leading-tight tracking-tighter my-4 font-bold ">
                                Edit one line.<br />
                                Get longer threads,<br />
                                cost savings<br />
                                memory.
                            </h2>

                            <div className="space-y-2 text-gray-300 max-sm:-mt-[30px] text-sm sm:text-base leading-snug">
                                <p>
                                    Just add
                                    <span className="bg-[linear-gradient(135deg,_#a4e8f5,_#94c6ff_14%,_#2782ff_66%,_#7e67ff_91%)] text-transparent bg-clip-text font-semibold px-1">
                                        api.supermemory.ai/v3
                                    </span>
                                    to your OpenAI base URL — and
                                </p>
                                <p>get automatic long-term context across conversations.</p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="relative mt-[2rem] space-y-10 flex items-center justify-center flex-col w-[100%]">
                            <div className="relative w-full overflow-x-auto text-base max-w-full p-6 sm:p-10 lg:p-8 border-[3px] border-[#383838] rounded-[1.75rem] font-mono shadow-[inset_0_0_0_6px_#06060640] bg-[#21252a]">
                                <button
                                    onClick={handleCopy}
                                    className="absolute top-4 cursor-pointer right-4 flex items-center gap-2 text-sm px-3 py-1 text-whiteborder border-white/20 rounded-md"
                                >
                                    <i className="bi bi-copy"></i>
                                    {state}
                                </button>

                                {/* Code Content */}
                                <div className="font-mono md:text-[1.3rem] space-y-3 mt-4">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-pink-400">import</span>
                                        <span className="text-white">OpenAI</span>
                                        <span className="text-pink-400">from</span>
                                        <span className="text-green-400">"openai"</span>
                                    </div>

                                    <div className="h-4" />

                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-pink-400">const</span>
                                            <span className="text-blue-300">client</span>
                                            <span className="text-white">=</span>
                                            <span className="text-pink-400">new</span>
                                            <span className="text-yellow-300">OpenAI</span>
                                            <span className="text-white">(</span>
                                        </div>

                                        <div className="ml-6 max-sm:text-[.8rem] space-y-1">
                                            <div className="flex items-center space-x-2">
                                                <span className="text-blue-300">baseURL:</span>
                                                <span className="text-green-400">"https://api.supermemory.ai/v3"</span>
                                            </div>
                                            <div className="text-gray-500 ">//https://api.openai.com/v1/</div>
                                        </div>

                                        <div className="text-white">)</div>
                                    </div>
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
    );
};

export default SolutionSection;
