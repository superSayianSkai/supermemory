import { useEffect, useRef, useState } from "react";
import { CarouselData } from "../data/CarouselData";

const Carousels = () => {
  const duplicatedData = [...CarouselData, ...CarouselData]; // loop
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-scroll using scrollLeft
  useEffect(() => {
    const carousel = wrapperRef.current;
    if (!carousel) return;

    let animationFrame: number;

    const scroll = () => {
      if (!isHovered && !isDragging) {
        carousel.scrollLeft += 1;
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered, isDragging]);

  // Mouse drag events
  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    setIsDragging(true);
    startX.current = e.pageX;
    scrollStart.current = wrapperRef.current?.scrollLeft ?? 0;
  };

  const onMouseUp = () => {
    isDown.current = false;
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    isDown.current = false;
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !wrapperRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX.current) * 1.2; // drag speed multiplier
    wrapperRef.current.scrollLeft = scrollStart.current - walk;
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-[#1c2026] -mt-[110px] pt-4  max-w-[1400px] overflow-hidden"
    >
      <div className="relative  pt-4 h-[300px]">

        {/* Left gradient shadow */}
        <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none shadow-[inset_40px_0_30px_25px_#1c2026]" />
        {/* Right gradient shadow */}
        <div className="absolute right-0 top-0 p-2 h-full w-24 z-10 pointer-events-none shadow-[inset_-40px_0_30px_25px_#1c2026]" />

        <div
          ref={wrapperRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          className="flex gap-4 h-full p-4 overflow-x-auto scroll-smooth scroll-none select-none cursor-grab active:cursor-grabbing"
        >
          {duplicatedData.map(({ title, items }, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[350px] h-[250px] p-8 space-y-6
                bg-[#1c2026] text-white rounded-2xl border-[3px] border-[#383838]
                shadow-[0_2px_20px_#00000040,inset_0_0_0_4px_#06060640,inset_0_4px_2px_#54545440]
                transition-transform duration-300 ${isHovered ? "rotate-2" : ""}
              `}
            >
              <h3 className="font-medium text-base">{title}</h3>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="text-[.8rem]">{item}</li>
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
