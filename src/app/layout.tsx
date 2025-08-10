import type { Metadata } from "next";
import { Protest_Guerrilla, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const protest_guerilla = Protest_Guerrilla({
    variable: "--font-protest-guerilla",
    subsets: ["latin"],
    weight: ["400"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Vuk Tacic",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body
                className={`${protest_guerilla.variable} ${montserrat.variable} antialiased bg-zinc-900 text-white min-h-screen font-sans`}
            >
                <SmoothScrolling />
                {children}
            </body>
        </html>
    );
}