'use client';

import { useEffect, useRef } from 'react';
import { animate, onScroll } from 'animejs';
import Image from 'next/image';

export default function Train() {
    const trainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!trainRef.current) return;

        const animation = animate(trainRef.current, {
            x: "-250vw",
            ease: "linear",
            autoplay: onScroll({
                container: "body",
                enter: "90vh 0",
                leave: "0vh 0",
                sync: 1,
                debug: false
            }),
        });

        return () => {
            animation.pause();
        };
    }, []);

    return (
        <div className="relative w-full overflow-visible">
            <div 
                ref={trainRef}
                className="absolute top-0 left-0"
                style={{ transform: 'translateX(100vw)' }}
            >
                <img 
                    src="/train.svg" 
                    alt="train" 
                    className="h-[30vh] max-w-none"
                />
            </div>
        </div>
    );
}
