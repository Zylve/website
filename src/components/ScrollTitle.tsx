'use client';

import { animate, onScroll } from "animejs";
import { useEffect, useRef } from "react";

interface ScrollTitleProps {
    children: React.ReactNode;
}

export default function ScrollTitle({ children }: ScrollTitleProps) {
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!titleRef.current) return;

        animate(titleRef.current, {
            scale: 0.5,
            x: "-75vw ",
            ease: "inOut(1.5)",
            autoplay: onScroll({
                container: "body",
                enter: "50vh 0%",
                leave: "20vh 0%",
                sync: 1,
                debug: false
            }),
        });
    }, []);

    return (
        <div
            ref={titleRef}
            className="text-6xl font-bold text-white font-protest h-[10vh] flex items-center justify-center w-fit mx-auto"
        >
            {children}
        </div>
    );
}
