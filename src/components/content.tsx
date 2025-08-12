'use client';

import { useLenis } from 'lenis/react';

export default function LandingContent() {
    const lenis = useLenis();

    return (

        <div className="space-y-6 px-6 md:px-12 lg:px-24">
            <div className="space-y-2">
                <p>twelfth grade student from vancouver, bc.</p>
                <p>i do a lot of stuff.</p>
                <p>specialize in building physical things.</p>
            </div>

            <div className="space-y-2 mb-[3rem]">
                <div className={`text-2xl font-bold`}>
                    <p>currently:</p>
                </div>
                <p>leading bcydc, the largest high school developer community in bc <br></br> & organizing the biggest youth hackathons in vancouver</p>
                <p>captaining creekside robotics, the no. 2 first robotics team in bc</p>
                <p>representing 27000 burnaby students on dsac</p>
            </div>

            <div className="font-bold text-zinc-500 w-fit p-8 -m-4 hover:-rotate-2 hover:-translate-x-2 hover:-translate-y-2 transition-transform duration-300">
                <div
                    className="cursor-pointer hover:text-zinc-400 transition-colors flex items-center space-x-2"
                    onClick={() => {
                        lenis?.scrollTo("bottom", {
                            duration: 2,
                            easing: (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
                        });
                    }}
                >
                    <span>catch me on the other side.</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" /></svg>
                </div>
            </div>
        </div>
    );
}
