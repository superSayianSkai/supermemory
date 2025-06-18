import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const HeroSection: React.FC = () => {
      useEffect(() => {
        AOS.init({
            duration: 500,     // animation duration in ms
            once: true,        // whether animation should happen only once
            offset: 20,       // offset (in px) from the original trigger point
        });
    }, []);
  return (
    <section className="relative pt-22 sm:pt-[22px] md:pt-1 ">
      <div className="relative flex flex-col justify-end items-stretch gap-x-[12rem] gap-y-[10rem] h-full mt-0 pt-[3.5rem] pb-8">
        <img
          src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06561_hero-grid.svg"
          alt="..."
          className="z-0 opacity-5 pointer-events-none object-[50%_100%] w-[105rem] mx-auto absolute inset-x-0 top-0"
        />

        <div className="relative w-[100%] max-w-[calc(100%-1.5rem)] mx-auto">
          <img
            src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06589_Main%20graphics.svg"
            alt="Supermemory AI graphic"
            className="w-[100%] opacity-100 pt-0"
          />
          <div  data-aos="fade-up" className="-mt-[1.2rem] sm:-mt-[3rem] md:-mt-[6rem] mb-16 lg:mb-0">
            <h1 className="flex flex-col text-[1.78rem] sm:block sm:text-[2.3rem] md:text-[4.5rem] tracking-[1px] font-bold leading-[1]">
              The universal memory API<br className='hidden md:block' /> for the AI era
            </h1>

            <div className="flex flex-col mt-8  border-[#383838] rounded-xl p-2 gap-6 md:flex-row">
              {/* CTA Button */}
              <a href="https://console.supermemory.ai/login" target="_blank" className="button-wrapper  w-[100%] text-center sm:w-[50%] md:w-auto w-inline-block">
                <div className="button navbar s flex items-center justify-center ">
                  <div className="p-1 flex gap-6  text-center  w-[100%] ">
                    <div className="text-[1rem] w-[100%]  text-center md:text-[1.2rem] ">
                      Get supermemory
                      <sup className="text-[.5rem]">TM</sup>
                    </div>
                    <div className='hidden md:flex gap-1 opacity-20 '>
                      <i className="bi bi-command text-xl"></i>
                      <i className="bi bi-arrow-return-left text-xl"></i>
                    </div>
                  </div>
                </div>
              </a>

              {/* Text Content */}
              <div className="flex flex-col gap-3 text-white">
                <p className="text-[1rem] md:text-base">
                  Context engine for your app. Personalise LLMs for your users.
                </p>
                <div className="flex flex-wrap items-center gap-2 md:text-base">
                  <span>Built for developers who ship.</span>
                  <div>
                    <span className="underline hover:no-underline cursor-pointer">Start building</span>
                    <sup className="ml-1">Docs</sup>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;