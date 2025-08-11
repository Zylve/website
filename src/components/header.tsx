'use client';

import { useEffect } from 'react';
import { protest_guerilla } from '@/lib/font';
import { animate, stagger, svg } from 'animejs';

export default function Header() {

    useEffect(() => {

    }, []);

    return (
        <div>
            <h1 className={`${protest_guerilla.className} text-6xl font-bold text-transparent px-6 md:px-12 lg:px-24`} style={{ WebkitTextStroke: '1px white' }}>
                Vuk Tacic
            </h1>
        </div>
    );
}
