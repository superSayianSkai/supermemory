import React, { useEffect, useState, useCallback } from 'react';
import clsx from 'clsx';

const Navbar: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 100); // small delay helps smoothness
    return () => clearTimeout(timeout);
  }, []);

  const handleScroll = useCallback(() => {
    setHasScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navClasses = clsx(
    'fixed z-[20000] top-8 left-1/2 -translate-x-1/2',
    'flex items-center h-auto p-3 md:p-1 md:py-4',
    'gap-x-8 gap-y-8 text-white bg-[#21252a] border border-[#383838]',
    'rounded-[1.125rem] shadow-[0_2px_20px_#00000040,inset_0_0_0_4px_#06060640,inset_0_4px_2px_#54545440]',
    'transition-all duration-700 ease-out transform',
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10',
    hasScrolled
      ? 'w-[95%] max-w-[65rem]'
      : 'w-[95%] sm:max-w-[50rem] md:max-w-[81rem]'
  );



  return (
    <>
      <nav className={navClasses} aria-label="Main navigation">
        {/* Left: Logo & Nav Links */}
        <div className='relative flex items-center flex-1 gap-x-4 '>
          <div className="flex items-center flex-1 gap-x-4">
            <div className="flex items-center gap-x-2 mx-2">
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06541_logo.svg"
                alt="Supermemory logo"
                className='w-[20%] md:w-[100%] '
              />
              <img
                loading="lazy"
                className={clsx(
                  'w-[50%] md:w-[100%] h-[1.5rem] mt-[.5rem] transition-all duration-500 ease-in-out',
                  hasScrolled && 'md:hidden scale-90 pointer-events-none'
                )}

                src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06595_logo-navbag-long.svg"
                alt="Supermemory long logo"
              />
            </div>

            <div className="hidden md:flex text-[.8rem] md:text-[1rem] space-x-4">
              {['Blog', 'Docs', 'Pricing'].map((item) => (
                <a key={item} href="#" className="hover:text-blue-400 transition">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Social + CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-2.5">
              <div className="flex items-center space-x-1 text-[.7rem]">
                <i className="bi bi-github" />
                <span>9.5k</span>
              </div>
              <div className="flex not-odd:items-center space-x-1 text-[.7rem]">
                <i className="bi bi-twitter-x" />
                <span>4.1k</span>
              </div>
            </div>

            {/* Hide CTA when mobile menu is open */}

            <a
              href="https://console.supermemory.ai/login"
              target="_blank"
              className="button-wrapper hidden md:block "
            >
              <div className="button navbar hidden md:block">
                <div>
                  Get supermemory
                  <sup className=".5rem">TM</sup>
                </div>
              </div>
            </a>

            {/* Hamburger Toggle */}
            <div className="md:hidden ">
              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
                className="p-2 rounded hover:opacity-50 cursor-pointer transition"
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          <div
            className={clsx(
              'absolute z-[19999] left-1/2 w-[100%] pt-5 md:hidden',
              'bg-[#21252a] border border-[#383838] border-t-0',
              'rounded-b-[1.125rem] shadow-[0_2px_20px_#00000040,inset_0_0_0_4px_#06060640,inset_0_4px_2px_#54545440]',
              'transition-all duration-500 ease-in-out',
              isMenuOpen
                ? 'top-[3.3rem] z-0 opacity-100 translate-x-[-50%] translate-y-0'
                : 'top-[3.3rem] z-0 opacity-0 pointer-events-none translate-x-[-50%] -translate-y-4'
            )}
          >
            <div className="p-6 pt-4 space-y-4">
              {['Blog', 'Docs', 'Pricing'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-white hover:text-blue-400 transition-colors duration-300 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}

              <div className="flex space-x-6 pt-3 border-t border-[#383838]">
                <div className="flex items-center space-x-1 text-[.7rem]">
                  <i className="bi bi-github" />
                  <span>9.5k</span>
                </div>
                <div className="flex items-center space-x-1 text-[.7rem]">
                  <i className="bi bi-twitter-x" />
                  <span>4.1k</span>
                </div>
              </div>

              <a
                href="https://console.supermemory.ai/login"
                target="_blank"
                className="button-wrapper w-[100%] w-inline-block"
              >
                <div className="button navbar text-sm ">
                  <div>
                    Get supermemory
                    <sup className=".5rem">TM</sup>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>


    </>
  );
};

export default Navbar;
