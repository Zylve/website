'use client';

import { useEffect } from 'react';
import { Protest_Guerrilla } from 'next/font/google';

const protest_guerilla = Protest_Guerrilla({
    variable: "--font-protest",
    subsets: ["latin"],
    weight: ["400"],
});

export default function Header() {

    useEffect(() => {
        // Animation logic can be added here
    }, []);

    return (
        <div>
            <h1 className={`text-6xl font-bold text-white ${protest_guerilla.className}`}>Vuk Tacic</h1>
        </div>
    );
}
