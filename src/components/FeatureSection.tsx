import React, { useState, useEffect } from "react";
import FeatureMainDiv from "./FeatureMainDiv";
import useInView from "../hooks/useInView";

const FeatureSection: React.FC = () => {
  const items = [1, 2, 3, 4];

  // ✅ Call hooks at the top level
  const views = items.map(() => useInView());

  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative max-w-8xl flex flex-col py-[100px] sm:py-32 md:py-[200px] w-full px-4 space-y-10">
      <img
        src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06560_features-grid.svg"
        loading="lazy"
        alt=""
        className="z-0 opacity-20 pointer-events-none object-cover sm:object-contain max-w-8xl mx-auto absolute inset-x-0 top-0"
      />

      <div
        data-aos="fade-up"
        className="uppercase text-sm text-gray-500 leading-5 text-center opacity-50 mb-20 sm:mb-32 md:mb-[350px]"
      >
        Features • Features • Features
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {items.map((_, index) => {
          const { ref, inView } = views[index];
          const moveUp = isScrollingUp ? index % 2 === 1 : index % 2 === 0;

          const widthClass =
            index === 2 || index === 3
              ? "w-full max-w-[90%] sm:max-w-[400px]"
              : "w-full max-w-[90%] sm:max-w-[200px]";

          const heightClass = "h-[40vh] sm:h-[45vh] md:h-[50vh]";

          const translateClass = inView
            ? moveUp
              ? "-translate-y-[60%]"
              : "translate-y-[60%]"
            : "translate-y-0";

          return (
            <div
              key={index}
              ref={ref}
              className={`
                ${widthClass}
                ${heightClass}
                transition-transform
                duration-[700ms]
                ease-in-out
                shadow-lg
                bg-gradient-to-b
                from-cyan-200 from-0% via-blue-400 via-40% to-gray-900 to-100%
                hidden md:block
                ${translateClass}
              `}
            />
          );
        })}
      </div>

      <FeatureMainDiv />
    </div>
  );
};

export default FeatureSection;
