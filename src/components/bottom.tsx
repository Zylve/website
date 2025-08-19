'use client';

import Icon from './icon';
import Mountains from './svg/mountains';
import Liner from './svg/liner';
import { useLenis } from 'lenis/react';
import { animate, svg, stagger } from 'animejs';

export default function Bottom() {
    const lenis = useLenis();

    return (
        <div className="h-[85dvh] w-full bg-zinc-900 relative">
            <div className="w-full bg-zinc-900 px-6 md:px-12 lg:px-24">
                <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-8">
                        <Icon src="/icons/github.svg" alt="GitHub" href="https://github.com/vuktacic" />
                        <Icon src="/icons/linkedin.svg" alt="LinkedIn" href="https://linkedin.com/in/vuktacic" />
                        <Icon src="/icons/instagram.svg" alt="Instagram" href="https://instagram.com/vuktacic" />
                        <Icon src="/icons/discord.svg" alt="Discord" href="https://discord.gg/nn5dp5fGPc" />
                        <Icon src="/icons/gmail.svg" alt="Gmail" href="mailto:vuk.tacic@gmail.com" />
                        <Icon src="/icons/hackclub.svg" alt="Hack Club" href="https://hackclub.slack.com/team/U06SYK3M62J" />
                    </div>
                    <Liner />

                    <div className="font-bold text-zinc-500 w-fit p-8 -m-4 hover:rotate-2 hover:-translate-x-2 hover:translate-y-2 transition-transform duration-300">
                        <div
                            className="cursor-pointer hover:text-zinc-400 transition-colors flex items-center space-x-2"
                            onClick={() => {
                                animate(svg.createDrawable(".line"), {
                                    draw: "1 1",
                                    ease: "inOutQuad",
                                    duration: 250,
                                    delay: stagger(2),
                                    onComplete: () => {
                                        lenis?.scrollTo("top", {
                                            duration: 2,
                                            easing: (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
                                        });
                                    }
                                });
                            }}
                        >
                            <span>return to the station.</span>
                            <div className="-scale-100"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" /></svg></div>
                        </div>
                    </div>
                    
                    <div className="text-sm text-zinc-500 text-center mt-4">
                        <span>Copyright © 2025 Vuk Tacic. </span>
                        <a 
                            href="https://github.com/vuktacic/website" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-zinc-400 transition-colors underline"
                        >
                            View repository
                        </a>
                    </div>

                    <Mountains />
                </div>
            </div>
        </div>
    );
}






