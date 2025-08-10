'use client';

import { useEffect, useRef } from 'react';
import { animateNavItems, navHoverIn, navHoverOut } from '@/lib/animations';

const navItems = [
    { id: 'who', label: 'who', href: '#who' },
    { id: 'what', label: 'what', href: '#what' },
    { id: 'how', label: 'how', href: '#how' },
    { id: 'why', label: 'why', href: '#why' },
    { id: 'contact', label: 'contact', href: '#contact' },
];

export default function Nav() {
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate nav items on mount
        const timer = setTimeout(() => {
            animateNavItems('.nav-item');
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    const handleNavClick = (href: string) => {
        // Enhanced smooth scroll to section
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    };

    const handleNavItemHover = (e: React.MouseEvent<HTMLAnchorElement>, isEntering: boolean) => {
        if (isEntering) {
            navHoverIn(e.currentTarget);
        } else {
            navHoverOut(e.currentTarget);
        }
    };

    return (
        <nav
            ref={navRef}
            className="fixed left-0 top-0 h-full w-[15vw] flex flex-col justify-start bg-zinc-900 p-8 pt-16 border-r border-zinc-800 z-50"
        >
            <div className="space-y-8">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-3xl font-bold text-white mb-2 font-protest">
                        Vuk Tacic
                    </h1>
                    <p className="text-zinc-400 text-lg font-protest">
                        16, Vancouver
                    </p>
                </div>

                {/* Navigation Items */}
                <div className="space-y-4">
                    {navItems.map(({ id, label, href }) => (
                        <a
                            key={id}
                            href={href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(href);
                            }}
                            onMouseEnter={(e) => handleNavItemHover(e, true)}
                            onMouseLeave={(e) => handleNavItemHover(e, false)}
                            className="nav-item block text-2xl font-medium font-protest transition-all duration-300 text-zinc-300 hover:text-sharp-red-400"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
