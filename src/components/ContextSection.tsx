
const ContextSection = () => {
    return (
        <div className="relative mt-[100px] md:mt-[200px] border-[1px ] border-gray-500  mb-[120px] max-w-[calc(100% - 3.5rem)] gap-y-10 flex justify-center items-center flex-col">
            <img
                src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06561_hero-grid.svg"
                alt="..."
                className="z-0 opacity-20 pointer-events-none object-[50%_100%] w-[105rem] mx-auto absolute inset-x-0 top-0"
            />

            <img loading="lazy" className="z-10 w-[8rem] h-[6rem] mb-[-1rem]" src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b0658a_gradient-ish-symbol.svg" />
            <div className="z-10 space-y-10 max-w-4xl text-center">
                <h2 className="text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                    Context
                    <br />
                    is everything
                </h2>

                <div className="flex text-center items-center justify-center ">
                    <span className="max-w-[238px]">Without it, even the smartest AI is just an expensive chatbot</span>
                </div>
            </div>

            {/* Decorative border */}

            <div className="mt-[60px] z-10 hidden md:block">
                <img src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06596_HorizontalBorder.png" loading="lazy" sizes="(max-width: 2706px) 100vw, 2706px" alt="" className="w-[55rem] max-w-[100%]" />
            </div>
        </div>
    )
}

export default ContextSection