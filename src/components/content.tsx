'use client';

import { useEffect } from 'react';

export default function LandingContent() {

    useEffect(() => {
        // Animation logic can be added here
    }, []);

    return (

        <div className="space-y-6">
            <div className="space-y-2">
                <p>twelth grade student from vancouver, bc.</p>
                <p>i do a lot of stuff.</p>
                <p>specialize in building physical things.</p>
            </div>

            <div className="space-y-2">
                <p>Currently:</p>
                <p>leading bcydc, the largest high school developer community in bc <br></br> & organizing the biggest youth hackathons in vancouver</p>
                <p>captaining creekside robotics, the no. 2 first robotics team in bc</p>
                <p>representing 27000 burnaby students on dsac</p>
            </div>
        </div>
    );
}
