import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

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
                className={` ${montserrat.variable} antialiased bg-zinc-900 text-white min-h-screen font-sans`}
            >
                <SmoothScrolling />
                {children}
            </body>
        </html>
    );
}