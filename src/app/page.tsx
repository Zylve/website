"use client";

import Header from '@/components/header';
import LandingContent from '@/components/content';
import Train from '@/components/train';
import { ReactLenis } from 'lenis/react';

export default function Home() {
    return (
        <>
            <ReactLenis root options={{
                duration: 2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            }} />

            <div className="bg-zinc-900 min-h-screen">
                <div className="flex flex-col items-center h-screen space-y-6 mt-[25vh]">
                    <Header />
                    <LandingContent />
                </div>
                <Train />

                <div className="h-[10vh] w-full bg-zinc-900"></div>

                <div className="h-[200vh] w-full bg-zinc-900 next"></div>
            </div>
        </>
    );
}