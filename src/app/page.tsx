"use client";

import Header from '@/components/header';
import LandingContent from '@/components/content';

export default function Home() {
    return (
        <div className="bg-zinc-900 min-h-screen">
            <div className="flex flex-col items-center h-screen space-y-6 mt-[25vh]">
                <Header />
                <LandingContent />
            </div>
        </div>
    );
}