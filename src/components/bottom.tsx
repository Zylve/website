'use client';

import Icon from './icon';
import Mountains from './svg/mountains';
import Liner from './svg/liner';

export default function Bottom() {
    return (
        <div className="h-[85dvh] w-full bg-zinc-900 relative">
            <div className="w-full bg-zinc-900 px-6 md:px-12 lg:px-24">
                <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-8">
                        <Icon src="/icons/github.svg" alt="GitHub" href="https://github.com/zylve" />
                        <Icon src="/icons/linkedin.svg" alt="LinkedIn" href="https://linkedin.com/in/vuktacic" />
                        <Icon src="/icons/instagram.svg" alt="Instagram" href="https://instagram.com/vuk.tc" />
                        <Icon src="/icons/discord.svg" alt="Discord" href="https://discord.gg/zylve" />
                        <Icon src="/icons/gmail.svg" alt="Gmail" href="mailto:vuk.tacic@gmail.com" />
                        <Icon src="/icons/hackclub.svg" alt="Hack Club" href="https://hackclub.slack.com/team/U06SYK3M62J" />
                    </div>

                    <Liner />

                    <Mountains />
                </div>
            </div>
        </div>
    );
}






