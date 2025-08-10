"use client";

import Nav from '@/components/Nav';
import ScrollTitle from '@/components/ScrollTitle';
import { animate, onScroll } from 'animejs';
import { useEffect } from 'react';

export default function Home() {

    useEffect(() => {
        animate(".s-title", {
            scale: 0.5,
            x: "-75vw ",
            ease: "inOut(3)",
            autoplay: onScroll({
                container: "body",
                enter: "60vh 0%",
                leave: "20vh 0%",
                sync: 1,
                debug: true
            }),
        })
    }, []);

    return (
        <div className="bg-zinc-900 min-h-screen">
            {/* Fixed Navigation Overlay */}
            <Nav />

            {/* Main Scrollable Content - uses default browser scrolling */}
            <main className="px-4 lg:px-16 py-16 lg:py-24 lg:ml-64">
                {/* Content goes here - browser handles scrolling */}
                <div className="h-[50vh] bg-red-500"></div>

                <ScrollTitle>
                    Hello
                </ScrollTitle>

                <div className="h-[300vh] bg-zinc-800"></div>
            </main>
        </div>
    );
}