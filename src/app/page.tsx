"use client";

import Nav from '@/components/Nav';
import ScrollTitle from '@/components/ScrollTitle';

export default function Home() {
    return (
        <div className="bg-zinc-900 min-h-screen">
            <Nav />

            <main className="px-4 lg:px-16 py-16 lg:py-24 lg:ml-64">
                <div className="h-[50vh] bg-red-500"></div>

                <section id="who">
                    <ScrollTitle>
                        who
                    </ScrollTitle>
                    <div className="h-[50vh] bg-blue-500">
                        <div className="flex gap-8 h-full">
                            {/* Grey content in top left corner */}
                            <div className="flex-1 bg-zinc-700 m-6 h-[50%]">
                            </div>
                            
                            {/* Grey box on the right */}
                            <div className="flex-1 bg-zinc-700 m-6">
                            </div>
                        </div>
                    </div>
                </section>

                <section id="what">
                    <ScrollTitle>
                        what
                    </ScrollTitle>
                    <div className="h-auto bg-blue-500">
                        <div className="bg-green-800 h-[40vh]"></div>
                        <div className="bg-blue-950 h-[40vh]"></div>
                        <div className="bg-zinc-800 h-[25vh]"></div>
                        <div className="bg-zinc-700 h-[25vh]"></div>
                    </div>
                </section>

                <section id="how">
                    <ScrollTitle>
                        how
                    </ScrollTitle>
                    <div className="h-[50vh] bg-blue-500"></div>
                </section>

                <section id="thoughts">
                    <ScrollTitle>
                        thoughts
                    </ScrollTitle>
                    <div className="h-[25vh] bg-blue-500"></div>
                </section>

                <section id="contact">
                    <ScrollTitle>
                        contact
                    </ScrollTitle>
                    <div className="h-[10vh] bg-blue-500"></div>
                </section>
            </main>
        </div>
    );
}