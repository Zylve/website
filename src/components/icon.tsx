'use client';

import Image from 'next/image';

interface IconProps {
    src: string;
    alt: string;
    href?: string;
}

export default function Icon({ src, alt, href = "#" }: IconProps) {
    return (
        <a 
            href={href} 
            className="hover:scale-110 hover:-rotate-3 transition-transform duration-200"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image 
                src={src} 
                alt={alt} 
                width={48}
                height={48}
                className="filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-200" 
            />
        </a>
    );
}
