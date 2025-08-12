"use client";

import Header from '@/components/header';
import LandingContent from '@/components/content';
import Train from '@/components/train';
import Bottom from '@/components/bottom';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

export default function Home() {
    return (
        <>
            <ReactLenis root options={{
                duration: 2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                syncTouch: true,
                wheelMultiplier: 0.5,
                touchMultiplier: 1,
            }}>

                <div className="bg-zinc-900 min-h-screen">
                    <div className="h-[10vh] md:h-[25vh] w-full bg-zinc-900"></div>
                    <div className="flex flex-col items-center h-screen space-y-6">
                        <Header />
                        <LandingContent />
                    </div>

                    <Train />

                    <div className="h-[70vh] md:h-[50vh] w-full bg-zinc-900"></div>
                    <div className="h-[20vh] w-full bg-zinc-900 bot"></div>
                    <Bottom />
                    <div className="h-[calc(100lvh-100svh)] w-full bg-zinc-900"></div>
                </div>
            </ReactLenis>
        </>
    );
}