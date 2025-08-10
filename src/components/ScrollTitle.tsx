'use client';

interface ScrollTitleProps {
    children: React.ReactNode;
}

export default function ScrollTitle({ children }: ScrollTitleProps) {

    return (
        <div
            className="text-6xl font-bold text-white font-protest s-title h-[10vh] flex items-center justify-center w-fit mx-auto"
        >
            {children}
        </div>
    );
}
