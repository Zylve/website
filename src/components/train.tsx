/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useRef } from 'react';
import { animate, onScroll } from 'animejs';

export default function Train() {
    const trainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!trainRef.current) return;

        // Log the width of the div
        const divWidth = trainRef.current.offsetWidth;
        console.log('Div width =', divWidth, 'px');

        animate(trainRef.current, {
            x: "100vw",
            y: "50%",
            opacity: 1,
            duration: 0,
        });

        animate(trainRef.current, {
            x: `-${divWidth}px`,
            ease: "linear",
            autoplay: onScroll({
                container: "body",
                enter: "10vh 0%",
                leave: "-90vh 0%",
                sync: 1,
                debug: false
            }),
        });
    }, []);

    return (
        <div className="relative w-full overflow-visible h-0">
            {/* <div 
                ref={trainRef}
                className="fixed top-1/2 left-0 transform -translate-y-1/2 w-24 h-24 bg-red-500 z-50"
            /> */}
            <div ref={trainRef} className="fixed top-1/2 left-0 transform -translate-y-11/12 h-[30vh] opacity-0">
                <img src="/train.svg" alt="train" className="h-full max-w-none" />
            </div>
        </div>
    );
}
