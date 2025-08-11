'use client';

import { useEffect } from 'react';
import Icon from './icon';
import { animate, svg, onScroll } from 'animejs';

export default function Bottom() {
    useEffect(() => {
        animate(svg.createDrawable("svg"), {
            draw: "0 1",
            easing: "inOutQuad",
            duration: 5000,
            autoplay: onScroll({
                container: "body",
                enter: `${(-90 * window.innerHeight) / 100}px 0%`,
                leave: `${(-150 * window.innerHeight) / 100}px 0%`,
                sync: 0.25,
                debug: false
            }),
        });
    }, []);

    return (
        <div className="h-[85vh] w-full bg-zinc-900 relative">
            <div className="w-full bg-zinc-900 px-6 md:px-12 lg:px-24">
                <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-8">
                        <Icon src="/icons/github.svg" alt="GitHub" href="https://github.com/zylve" />
                        <Icon src="/icons/linkedin.svg" alt="LinkedIn" href="https://linkedin.com/in/vuktacic" />
                        <Icon src="/icons/instagram.svg" alt="Instagram" href="https://instagram.com/vuk.tc" />
                        <Icon src="/icons/discord.svg" alt="Discord" href="https://discord.gg/zylve" />
                        <Icon src="/icons/gmail.svg" alt="Gmail" href="mailto:vuk.tacic@gmail.com" />
                        <Icon src="/icons/hackclub.svg" alt="Hack Club" href="https://hackclub.slack.com/team/U06SYK3M62J" />
                    </div>

                    <div className="mx-8 md:mx-12 lg:mx-24">
                        <svg
                            width="300"
                            height="2"
                            viewBox="0 0 300 2"
                            className="opacity-60"
                        >
                            <line
                                x1="150"
                                y1="1"
                                x2="0"
                                y2="1"
                                stroke="white"
                                strokeWidth="1"
                            />
                            <line
                                x1="150"
                                y1="1"
                                x2="300"
                                y2="1"
                                stroke="white"
                                strokeWidth="1"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <img src="/mountains.svg" alt="Mountains" className="w-full h-auto absolute bottom-0" />
        </div>
    );
}
