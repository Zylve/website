'use client';

import { animate, onScroll, svg } from "animejs";
import { useEffect } from "react";

export default function Liner() {
    useEffect(() => {
        animate(svg.createDrawable(".liner"), {
            draw: "0 1",
            ease: "inOutQuad",
            autoplay: onScroll({
                container: "body",
                enter: `${(70 * window.innerHeight) / 100}px 0%`,
                leave: `${(40 * window.innerHeight) / 100}px 0%`,
                sync: 0.5,
                debug: false
            }),
        });
    }, []);

    return (
        <div className="mx-8 md:mx-12 lg:mx-24">
            <svg width="300" height="2" viewBox="0 0 300 2" className="opacity-60 liner">
                <line x1="150" y1="1" x2="0" y2="1" stroke="white" strokeWidth="1" />
                <line x1="150" y1="1" x2="300" y2="1" stroke="white" strokeWidth="1" />
            </svg>
        </div>
    );
}