import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import productHunt from "../assets/product_hunt_logo_icon_144963.svg"
import github from "../assets/github-logo_icon-icons.com_73546.png"
type Feature = {
    logo: string;
    title: string;
    description: string;
    yes: boolean,
    desktopPosition: number,
    mobilePosition: number
};
const FeatureSection: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,     // animation duration in ms
            once: true,        // whether animation should happen only once
            offset: 20,       // offset (in px) from the original trigger point
        });
    }, []);
    const flow = "https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06543_Flow%20logo.png"
    const vendors = "https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06544_medtech%20vendors%20logo.png"
    const minuxs = "https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06542_mixus-logo-primary-horizontal-black%201.png"
    const features: Feature[] = [
        {
            logo: productHunt,
            title: "#1 Product of the Day at Product Hunt",
            description: "",
            yes: true,
            desktopPosition: 5,
            mobilePosition: 2
        },
        {
            logo: github,
            title: "Starred by over 9,000 users on GitHub",
            description: "",
            yes: true,
            desktopPosition: 10,
            mobilePosition: 2
        },
        {
            logo: flow,
            title: "Flow uses SuperMemory to build the cursor for writing",
            description: "",
            yes: false,
            desktopPosition: 14,
            mobilePosition: 2
        },
        {
            logo: vendors,
            title: "MedTech Vendors uses SuperMemory to search through 500k vendors",
            description: "",
            yes: false,
            desktopPosition: 10,
            mobilePosition: 2
        },
        {
            logo: minuxs,
            title: "Mixus uses SuperMemory to power co-intelligence agentic platform",
            description: "",
            yes: false,
            desktopPosition: 5,
            mobilePosition: 2
        },
    ];

    return (
        <div className="relative max-w-8xl max-sm:border-t-[1px] mt-20 pt-20 border-gray-500 bg-[#1c2026] flex flex-col  md:py-[200px]  w-full px-4 space-y-10 mb-70">
            <img
                src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06560_features-grid.svg"
                loading="lazy"
                alt=""
                className="-z-0 opacity-10 pointer-events-none object-cover sm:object-contain w-full max-w-[1600px] mx-auto absolute inset-x-0 top-0"
            />

            <div data-aos="fade-up" className="max-w-8xl  flex flex-col gap-y-10 items-center justify-center text-center -mb-40 ">
                <h4 className="sm:max-w-[20ch] font-bold leading-tight font-semi-bold traking-[.6rem] text-[1rem] sm:text-3xl text-white">Trusted by Open Source, enterprise, and more than</h4>
                <svg xmlns="http://www.w3.org/2000/svg" className="max-w-[70%] w-[70%] h-auto" viewBox="0 0 579 166" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                    <path d="M526.293 0.5C542.136 0.5 554.752 5.07587 564.081 14.2734H564.082C573.553 23.4846 578.249 36.9456 578.249 54.5684V87.208C578.249 104.929 573.701 118.377 564.521 127.46L564.079 127.889C554.749 136.83 542.134 141.276 526.293 141.276C510.578 141.276 497.966 136.829 488.51 127.892L488.505 127.887C479.159 118.8 474.529 105.209 474.529 87.208V54.5684C474.529 37.2229 479.017 23.9091 488.067 14.7109L488.505 14.2734L488.95 13.8457C498.355 4.93528 510.82 0.500064 526.293 0.5ZM526.293 19.5479C516.419 19.5479 508.89 22.5814 503.63 28.5928L503.626 28.5977C498.356 34.4951 495.689 42.7456 495.689 53.416V87.9756C495.689 99.1684 498.233 107.675 503.247 113.568C508.373 119.316 516.023 122.227 526.293 122.228C536.824 122.228 544.533 119.249 549.528 113.38C554.547 107.355 557.089 98.9081 557.089 87.9756V53.416C557.089 42.4878 554.358 34.1791 548.968 28.4131L548.965 28.4092C543.575 22.518 536.04 19.5479 526.293 19.5479Z" fill="url(#35-000_paint0-linear-6288-291)" stroke="url(#35-000_paint1-linear-6288-291)"></path>
                    <path d="M414.063 0.5C429.907 0.5 442.523 5.07587 451.852 14.2734H451.853C461.323 23.4846 466.02 36.9456 466.02 54.5684V87.208C466.02 104.929 461.471 118.377 452.291 127.46L451.85 127.889C442.52 136.83 429.905 141.276 414.063 141.276C398.349 141.276 385.736 136.829 376.28 127.892L376.275 127.887C366.93 118.8 362.3 105.209 362.3 87.208V54.5684C362.3 37.2229 366.788 23.9091 375.838 14.7109L376.275 14.2734L376.721 13.8457C386.125 4.93528 398.591 0.500064 414.063 0.5ZM414.063 19.5479C404.189 19.5479 396.661 22.5814 391.4 28.5928L391.396 28.5977C386.127 34.4951 383.46 42.7456 383.46 53.416V87.9756C383.46 99.1684 386.004 107.675 391.018 113.568C396.143 119.316 403.794 122.227 414.063 122.228C424.594 122.228 432.304 119.249 437.299 113.38C442.318 107.355 444.859 98.908 444.859 87.9756V53.416C444.859 42.4878 442.128 34.179 436.738 28.4131L436.735 28.4092C431.346 22.518 423.811 19.5479 414.063 19.5479Z" fill="url(#35-000_paint2-linear-6288-291)" stroke="url(#35-000_paint3-linear-6288-291)"></path>
                    <path d="M301.833 0.499878C317.677 0.499878 330.293 5.07575 339.621 14.2733H339.622C349.093 23.4845 353.789 36.9454 353.789 54.5682V87.2079C353.789 104.929 349.241 118.377 340.061 127.46L339.619 127.889C330.29 136.83 317.674 141.276 301.833 141.276C286.119 141.276 273.506 136.829 264.05 127.891L264.045 127.887C254.699 118.8 250.07 105.209 250.07 87.2079V54.5682C250.07 37.2228 254.557 23.909 263.608 14.7108L264.045 14.2733L264.49 13.8456C273.895 4.93516 286.36 0.499942 301.833 0.499878ZM301.833 19.5477C291.959 19.5478 284.43 22.5813 279.17 28.5927L279.166 28.5975C273.896 34.495 271.23 42.7455 271.23 53.4159V87.9755C271.23 99.1683 273.773 107.675 278.787 113.568C283.913 119.315 291.564 122.227 301.833 122.227C312.364 122.227 320.074 119.249 325.069 113.38C330.088 107.355 332.629 98.9079 332.629 87.9755V53.4159C332.629 42.4877 329.898 34.1789 324.508 28.413L324.505 28.4091C319.115 22.5179 311.581 19.5477 301.833 19.5477Z" fill="url(#35-000_paint4-linear-6288-291)" stroke="url(#35-000_paint5-linear-6288-291)"></path>
                    <path d="M227.958 109.172C232.551 109.172 236.33 110.684 239.248 113.727L239.53 114.003C242.397 116.891 243.818 120.647 243.818 125.224V145.191C243.818 151.604 242.215 156.507 238.92 159.802C235.625 163.096 230.723 164.7 224.311 164.7H215.938V152.372H222.966C225.513 152.372 227.331 151.736 228.517 150.551C229.702 149.366 230.338 147.547 230.338 145V139.355H227.958C223.37 139.355 219.533 137.976 216.485 135.193C213.434 132.408 211.906 128.88 211.906 124.647C211.906 120.047 213.423 116.323 216.483 113.528C219.529 110.618 223.367 109.172 227.958 109.172Z" fill="url(#35-000_paint6-linear-6288-291)" stroke="url(#35-000_paint7-linear-6288-291)"></path>
                    <path d="M201.457 3.18799V22.4282H131.568V60.98H133.858C135.161 58.8388 136.943 56.8297 139.196 54.9517C141.688 52.8543 144.883 51.164 148.767 49.8696L149.508 49.6333C153.257 48.4902 157.674 47.9243 162.749 47.9243C170.756 47.9244 178.003 49.6675 184.479 53.1626L185.096 53.4839C191.424 56.8541 196.471 61.8073 200.235 68.3306L200.595 68.9556C204.249 75.4547 206.064 83.2738 206.064 92.3921V94.5044C206.064 103.626 204.188 111.622 200.417 118.477L200.046 119.137C196.028 126.136 190.26 131.576 182.757 135.458L182.758 135.458C175.375 139.344 166.523 141.276 156.221 141.276C146.366 141.276 137.754 139.524 130.4 136.001L129.693 135.655C122.189 131.903 116.356 126.591 112.209 119.722L112.205 119.716C108.186 112.846 106.185 104.884 106.185 95.8481V93.2358H127.729V95.6558C127.729 103.738 130.187 110.195 135.07 115.079C140.072 119.825 147.036 122.228 156.028 122.228C165.28 122.228 172.37 119.696 177.371 114.695L177.833 114.22C182.534 109.262 184.904 102.644 184.904 94.312V92.5845C184.904 84.6318 182.539 78.265 177.838 73.436L177.371 72.9692C172.483 68.0815 166.215 65.6284 158.524 65.6284C154.223 65.6284 150.654 66.324 147.796 67.6909L147.787 67.6948C145.027 68.9493 142.785 70.5095 141.047 72.3677L140.439 73.0786C139.051 74.7309 137.86 76.3308 136.865 77.8784L136.718 78.1079H110.408V3.18799H201.457Z" fill="url(#35-000_paint8-linear-6288-291)" stroke="url(#35-000_paint9-linear-6288-291)"></path>
                    <path d="M98.8438 3.18799V31.2358L98.5996 31.3813L53.7236 58.1157V60.02H61.4805C68.329 60.0201 74.7959 61.3126 80.876 63.8999L81.4443 64.147C87.2808 66.7432 92.0276 70.6214 95.6758 75.7769L96.0371 76.2827C99.7114 81.5533 101.532 88.15 101.532 96.0396V98.3442C101.532 107.003 99.4634 114.587 95.3096 121.078L95.3066 121.082C91.156 127.437 85.3226 132.423 77.8252 136.042L77.8193 136.045C70.3173 139.538 61.6026 141.276 51.6885 141.276C42.0813 141.276 33.4828 139.583 25.9033 136.187L25.1729 135.853C17.4118 132.231 11.3208 126.985 6.91504 120.118L6.91113 120.112C2.63012 113.236 0.5 105.077 0.5 95.6558V91.6997H21.6602V95.272C21.6602 103.595 24.3638 110.17 29.7422 115.053H29.7432C35.2642 119.821 42.5628 122.228 51.6885 122.228C60.8229 122.228 67.8566 119.945 72.8574 115.445L73.3203 115.018C78.0236 110.577 80.372 105.03 80.3721 98.3442V96.6157C80.372 91.8587 79.2506 88.0377 77.0488 85.1108L76.832 84.8306C74.4656 81.8414 71.2849 79.6533 67.2695 78.2729L67.2568 78.2681C63.2258 76.7564 58.6783 75.9956 53.6084 75.9956H28.7236V51.978L28.9697 51.8335L75.9561 24.1382V22.2358H3.76367V3.18799H98.8438Z" fill="url(#35-000_paint10-linear-6288-291)" stroke="url(#35-000_paint11-linear-6288-291)"></path>
                    <defs>
                        <linearGradient id="35-000_paint0-linear-6288-291" x1="526.393" y1="163.303" x2="526.393" y2="-4.75097" gradientUnits="userSpaceOnUse">
                            <stop offset="0.08" stop-color="#17181A"></stop>
                            <stop offset="0.16" stop-color="#1B3355"></stop>
                            <stop offset="0.24" stop-color="#1E4B88"></stop>
                            <stop offset="0.31" stop-color="#215EB3"></stop>
                            <stop offset="0.39" stop-color="#246ED4"></stop>
                            <stop offset="0.46" stop-color="#2579EB"></stop>
                            <stop offset="0.53" stop-color="#267FFA"></stop>
                            <stop offset="0.58" stop-color="#2782FF"></stop>
                            <stop offset="0.99" stop-color="#A4E8F5"></stop>
                        </linearGradient>
                        <linearGradient id="35-000_paint1-linear-6288-291" x1="474.617" y1="70.892" x2="578.178" y2="70.892" gradientUnits="userSpaceOnUse">
                            <stop offset="0.48" stop-color="#1C2026"></stop>
                            <stop offset="0.78" stop-color="#2782FF"></stop>
                            <stop offset="0.99" stop-color="#A4E8F5"></stop>
                        </linearGradient>
                        <linearGradient id="35-000_paint2-linear-6288-291" x1="414.164" y1="163.303" x2="414.164" y2="-4.75097" gradientUnits="userSpaceOnUse">
                            <stop offset="0.08" stop-color="#17181A"></stop>
                            <stop offset="0.16" stop-color="#1B3355"></stop>
                            <stop offset="0.24" stop-color="#1E4B88"></stop>
                            <stop offset="0.31" stop-color="#215EB3"></stop>
                            <stop offset="0.39" stop-color="#246ED4"></stop>
                            <stop offset="0.46" stop-color="#2579EB"></stop>
                            <stop offset="0.53" stop-color="#267FFA"></stop>
                            <stop offset="0.58" stop-color="#2782FF"></stop>
                            <stop offset="0.99" stop-color="#A4E8F5"></stop>
                        </linearGradient>
                        <linearGradient id="35-000_paint3-linear-6288-291" x1="362.388" y1="70.892" x2="465.949" y2="70.892" gradientUnits="userSpaceOnUse">
                            <stop offset="0.48" stop-color="#1C2026"></stop>
                            <stop offset="0.78" stop-color="#2782FF"></stop>
                            <stop offset="0.99" stop-color="#A4E8F5"></stop>
                        </linearGradient>
                        <linearGradient id="35-000_paint4-linear-6288-291" x1="301.934" y1="163.303" x2="301.934" y2="-4.75109" gradientUnits="userSpaceOnUse">
                            <stop offset="0.08" stop-color="#17181A"></stop>
                            <stop offset="0.16" stop-color="#1B3355"></stop>
                            <stop offset="0.24" stop-color="#1E4B88"></stop>
                            <stop offset="0.31" stop-color="#215EB3"></stop>
                            <stop offset="0.39" stop-color="#246ED4"></stop>
                            <stop offset="0.46" stop-color="#2579EB"></stop>
                            <stop offset="0.53" stop-color="#267FFA"></stop>
                            <stop offset="0.58" stop-color="#2782FF"></stop>
                            <stop offset="0.99" stop-color="#A4E8F5"></stop>
                        </linearGradient>
                        <linearGradient id="35-000_paint5-linear-6288-291" x1="250.158" y1="70.8919" x2="353.718" y2="70.8919" gradientUnits="userSpaceOnUse">
                            <stop offset="0.48" stop-color="#1C2026"></stop>
                            <stop offset="0.78" stop-color="#2782FF"></stop>
                            <stop offset="0.99" stop-color="#A4E8F5"></stop>
                        </linearGradient>
                        <linearGradient id="35-000_paint6-linear-6288-291" x1="227.864" y1="172.988" x2="227.864" y2="107.428" gradientUnits="userSpaceOnUse">
                            <stop offset="0.08" stop-color="#17181A"></stop>
                            <stop offset="0.16" stop-color="#1B3355"></stop>
                            <stop offset="0.24" stop-color="#1E4B88"></stop>
                            <stop offset="0.31" stop-color="#215EB3"></stop>
                            <stop offset="0.39" stop-color="#246ED4"></stop>
                            <stop offset="0.46" stop-color="#2579EB"></stop>
                            <stop offset="0.53" stop-color="#267FFA"></stop>
                            <stop offset="0.58" stop-color="#2782FF"></stop>
                            <stop offset="0.99" stop-color="#A4E8F5"></stop>
                        </linearGradient>
                        <linearGradient id="35-000_paint7-linear-6288-291" x1="212.282" y1="136.937" x2="243.447" y2="136.937" gradientUnits="userSpaceOnUse">
                            <stop offset="0.48" stop-color="#1C2026"></stop>
                            <stop offset="0.78" stop-color="#2782FF"></stop>
                            <stop offset="0.99" stop-color="#A4E8F5"></stop>
                        </linearGradient>
                        <linearGradient id="35-000_paint8-linear-6288-291" x1="156.129" y1="162.87" x2="156.129" y2="-1.95238" gradientUnits="userSpaceOnUse">
                            <stop offset="0.08" stop-color="#17181A"></stop>
                            <stop offset="0.16" stop-color="#1B3355"></stop>
                            <stop offset="0.24" stop-color="#1E4B88"></stop>
                            <stop offset="0.31" stop-color="#215EB3"></stop>
                            <stop offset="0.39" stop-color="#246ED4"></stop>
                            <stop offset="0.46" stop-color="#2579EB"></stop>
                            <stop offset="0.53" stop-color="#267FFA"></stop>
                            <stop offset="0.58" stop-color="#2782FF"></stop>
                            <stop offset="0.99" stop-color="#A4E8F5"></stop>
                        </linearGradient>
                        <linearGradient id="35-000_paint9-linear-6288-291" x1="106.288" y1="72.236" x2="205.977" y2="72.236" gradientUnits="userSpaceOnUse">
                            <stop offset="0.48" stop-color="#1C2026"></stop>
                            <stop offset="0.78" stop-color="#2782FF"></stop>
                            <stop offset="0.99" stop-color="#A4E8F5"></stop>
                        </linearGradient>
                        <linearGradient id="35-000_paint10-linear-6288-291" x1="51.0201" y1="162.87" x2="51.0201" y2="-1.95238" gradientUnits="userSpaceOnUse">
                            <stop offset="0.08" stop-color="#17181A"></stop>
                            <stop offset="0.16" stop-color="#1B3355"></stop>
                            <stop offset="0.24" stop-color="#1E4B88"></stop>
                            <stop offset="0.31" stop-color="#215EB3"></stop>
                            <stop offset="0.39" stop-color="#246ED4"></stop>
                            <stop offset="0.46" stop-color="#2579EB"></stop>
                            <stop offset="0.53" stop-color="#267FFA"></stop>
                            <stop offset="0.58" stop-color="#2782FF"></stop>
                            <stop offset="0.99" stop-color="#A4E8F5"></stop>
                        </linearGradient>
                        <linearGradient id="35-000_paint11-linear-6288-291" x1="0.598791" y1="72.236" x2="101.45" y2="72.236" gradientUnits="userSpaceOnUse">
                            <stop offset="0.48" stop-color="#1C2026"></stop>
                            <stop offset="0.78" stop-color="#2782FF"></stop>
                            <stop offset="0.99" stop-color="#A4E8F5"></stop>
                        </linearGradient>
                    </defs>
                </svg>
                <h2 className="text-[2rem] font-medium leading-[1]">of you</h2>

                <div className="w-[90%] md:max-w-[65rem] grid md:grid-cols-5 gap-x-20  text-white">
                    {features.map((feature, idx) => (
                        <div
                            data-aos="fade-up"
                            key={idx}
                            className="text-center flex space-y-4 flex-col items-center responsive-margin"
                            style={{
                                "--mt-sm": `${feature.mobilePosition}rem`,
                                "--mt-md": `${feature.desktopPosition}rem`,
                            } as React.CSSProperties}
                        >
                            <img
                                src={feature.logo}
                                alt="Logo"
                                className={`p-1 ${feature.yes ? "rounded-full bg-white" : ""} w-auto object-contain h-10 sm:h-18`}
                            />
                            <p className="text-[.7rem] max-w-[40%] sm:max-w-xs">{feature.title}</p>
                        </div>

                    ))}
                </div>
            </div>


        </div>
    );
};

export default FeatureSection;
