'use client';

import { useEffect } from 'react';
import { useLenis } from 'lenis/react';
import { eases } from 'animejs';

export default function LandingContent() {
    const lenis = useLenis();

    return (

        <div className="space-y-6">
            <div className="space-y-2">
                <p>twelfth grade student from vancouver, bc.</p>
                <p>i do a lot of stuff.</p>
                <p>specialize in building physical things.</p>
            </div>

            <div className="space-y-2 mb-[10rem]">
                <div className={`text-2xl font-bold`}>
                    <p>currently:</p>
                </div>
                <p>leading bcydc, the largest high school developer community in bc <br></br> & organizing the biggest youth hackathons in vancouver</p>
                <p>captaining creekside robotics, the no. 2 first robotics team in bc</p>
                <p>representing 27000 burnaby students on dsac</p>
            </div>

            <div className="font-bold text-zinc-500">
                <p
                    className="cursor-pointer hover:text-zinc-400 transition-colors"
                    onClick={() => lenis?.scrollTo(".next", {
                        duration: 1,
                        easing: (t) => 1 - Math.pow(1 - t, 5),
                    })}
                >
                    catch me on the other side.
                </p>
            </div>
        </div>
    );
}
