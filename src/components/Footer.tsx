import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer
            className="footer-animated-bg text-white"
            style={{
                position: 'relative',
                overflow: 'hidden',
                fontSize: '0.875rem',
            }}
        >
            {/* KEYFRAME STYLES */}
            <style>
                {`
    @keyframes waveMove {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .wave {
      background: url('data:image/svg+xml;utf8,<svg width="1200" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M0,30 C150,90 350,0 600,30 C850,60 1050,10 1200,30 L1200,100 L0,100 Z" fill="black" /></svg>');
      background-repeat: repeat-x;
      background-size: cover;
      width: 200%;
      height: 100px;
      position: absolute;
      bottom: 0;
      left: 0;
      animation: waveMove 30s linear infinite;
      opacity: 0.15;
      z-index: 1;
    }

    @keyframes gradientFlow {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    .footer-animated-bg {
      background: linear-gradient(-45deg, #000c3f, #001b6e, #4498f8, #001b6e);
      background-size: 400% 400%;
      animation: gradientFlow 15s ease infinite;
    }

    .footer-content {
      position: relative;
      z-index: 2;
    }
  `}
            </style>


            {/* WAVE ANIMATION OVERLAY */}
            <div className="wave" />

            {/* TOP SVG LINE */}
            <img
                src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06593_footer-gradient-top.svg"
                alt=""
                className="w-full h-10 object-cover"
                loading="lazy"
            />

            {/* MAIN CONTENT */}
            <div className="footer-content">
                <div className="flex justify-center pt-12 px-4 sm:px-8 pb-10">
                    <img
                        src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06591_footer-logo.svg"
                        alt="Supermemory Logo"
                        className="max-w-xs sm:max-w-md w-full"
                        loading="lazy"
                    />
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4 pb-10">
                    {[
                        { label: 'Get supermemory', href: 'https://console.supermemory.ai/' },
                        { label: 'Start Building', href: 'https://console.supermemory.ai/' },
                    ].map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-wrapper  md:w-[32%] "
                            style={{
                                background:
                                    'linear-gradient(111deg, #a4e8f5, #267ffa 26%, #464646 49%, #747474 74%, #a4e8f5)',
                                borderRadius: '1rem',
                                padding: '2px',
                                transform: 'scale(1)',
                                transition: 'transform 0.3s ease',
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)')
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.transform = 'scale(1)')
                            }
                        >
                            <div className="button navbar text-white text-[1.5rem] rounded-2xl px-6 py-2">
                                {item.label}
                                <sup className="align-super text-xs ml-1">TM</sup>
                            </div>
                        </a>
                    ))}
                </div>

                {/* FOOTER INFO */}
                <div className="border-t flex-col border-white/10 px-4 sm:px-8 py-6 flex  lg:flex-row justify-between items-center gap-4">
                    <div className="max-md:order-5 text-center sm:text-left">
                        © 2025 supermemory.ai — made by Tonik
                    </div>

                    <div className="max-md:order-2 flex items-center gap-2">
                        <i className="bi bi-github" />
                        <span>9.5k</span>
                    </div>
                    <div className='max-md:order-3'>
                        Terms
                    </div>
                    <div className='max-md:order-4'>
                        Privacy Policy
                    </div>


                    <ul className="flex max-md:order-1 flex-col lg:flex-row flex-wrap items-center justify-center sm:justify-end gap-4">
                        <li><a href="#" className="hover:underline">Updates</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">Web App</a></li>
                        <li><a href="#" className="hover:underline">Docs</a></li>
                    </ul>
                </div>
            </div>

            {/* BOTTOM SVG LINE */}

        </footer>
    );
};

export default Footer;
