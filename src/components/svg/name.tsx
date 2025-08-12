"use client";

import { animate, stagger, svg, onScroll, JSAnimation } from "animejs";
import { useEffect } from "react";

export default function Name() {

    useEffect(() => {
        animate(svg.createDrawable(".titleheader"), {
            draw: "0 1",
            ease: "inOutQuad",
            duration: 500,
            delay: stagger(3),
            onBegin: () => {
                animate(".name-container", {
                    opacity: 1,
                    duration: 0,
                });
            }
        });

        let back: JSAnimation;
        let forward: JSAnimation;

        animate(svg.createDrawable(".titleheader"), {
            draw: "0 0",
            ease: "inOutQuad",
            duration: 500,
            delay: stagger(3),
            autoplay: onScroll({
                container: "body",
                enter: `${(15 * window.innerHeight) / 100}px 0%`,
                onLeaveBackward: () => {
                    back = animate(svg.createDrawable(".titleheader"), {
                        draw: "0 1",
                        ease: "inOutQuad",
                        duration: 500,
                        delay: stagger(3),
                        onBegin: () => { forward?.pause() },
                    });
                },
                onEnter: () => {
                    forward = animate(svg.createDrawable(".titleheader"), {
                        draw: "0 0",
                        ease: "inOutQuad",
                        duration: 250,
                        delay: stagger(2),
                        onBegin: () => { back?.pause() },
                    });
                },
                debug: false
            })
        });
    }, []);

    return (
        <svg viewBox="0 0 254 51" xmlns="http://www.w3.org/2000/svg">
            <g stroke="currentColor" fill="none">
                <path className="titleheader" d="M24.488 49H11.816" stroke="white" />
                <path className="titleheader" d="M11.816 49L1.32001 2.91998" stroke="white" />
                <path className="titleheader" d="M1.32001 2.91998H14.632" stroke="white" />
                <path className="titleheader" d="M14.632 2.91998L24.488 49" stroke="white" />
                <path className="titleheader" d="M27.24 46.632L21.8 21.224" stroke="white" />
                <path className="titleheader" d="M21.8 21.224L24.552 2.91998" stroke="white" />
                <path className="titleheader" d="M24.552 2.91998H37.16" stroke="white" />
                <path className="titleheader" d="M37.16 2.91998L27.24 46.632" stroke="white" />
                <path className="titleheader" d="M54.076 40.488V48.808" stroke="white" />
                <path className="titleheader" d="M54.076 48.808C52.668 49.2773 51.3027 49.512 49.98 49.512" stroke="white" />
                <path className="titleheader" d="M49.98 49.512C47.036 49.512 44.5827 48.5947 42.62 46.76" stroke="white" />
                <path className="titleheader" d="M42.62 46.76C40.7 44.9253 39.74 42.1733 39.74 38.504" stroke="white" />
                <path className="titleheader" d="M39.74 38.504V12.2" stroke="white" />
                <path className="titleheader" d="M39.74 12.2H51.26" stroke="white" />
                <path className="titleheader" d="M51.26 12.2V36.648" stroke="white" />
                <path className="titleheader" d="M51.26 36.648C51.26 38.952 52.1987 40.232 54.076 40.488" stroke="white" />
                <path className="titleheader" d="M56.636 44.072V12.2" stroke="white" />
                <path className="titleheader" d="M56.636 12.2H68.156" stroke="white" />
                <path className="titleheader" d="M68.156 12.2V49" stroke="white" />
                <path className="titleheader" d="M68.156 49H58.364" stroke="white" />
                <path className="titleheader" d="M58.364 49L56.636 44.072" stroke="white" />
                <path className="titleheader" d="M84.7675 17L73.2475 40.616" stroke="white" />
                <path className="titleheader" d="M73.2475 40.616V2.216" stroke="white" />
                <path className="titleheader" d="M73.2475 2.216L84.7675 0.679993" stroke="white" />
                <path className="titleheader" d="M84.7675 0.679993V17" stroke="white" />
                <path className="titleheader" d="M84.8315 49H72.6075" stroke="white" />
                <path className="titleheader" d="M72.6075 49L90.5915 12.2" stroke="white" />
                <path className="titleheader" d="M90.5915 12.2H102.88" stroke="white" />
                <path className="titleheader" d="M102.88 12.2L84.8315 49" stroke="white" />
                <path className="titleheader" d="M89.7595 46.248L96.4795 32.36" stroke="white" />
                <path className="titleheader" d="M96.4795 32.36L102.88 49" stroke="white" />
                <path className="titleheader" d="M102.88 49H90.6555" stroke="white" />
                <path className="titleheader" d="M90.6555 49L89.7595 46.248" stroke="white" />
                <path className="titleheader" d="M120.015 13.16V2.91998" stroke="white" />
                <path className="titleheader" d="M120.015 2.91998H152.271" stroke="white" />
                <path className="titleheader" d="M152.271 2.91998L150.351 13.16" stroke="white" />
                <path className="titleheader" d="M150.351 13.16H120.015" stroke="white" />
                <path className="titleheader" d="M129.359 16.36H141.903" stroke="white" />
                <path className="titleheader" d="M141.903 16.36V49" stroke="white" />
                <path className="titleheader" d="M141.903 49H129.359" stroke="white" />
                <path className="titleheader" d="M129.359 49V16.36" stroke="white" />
                <path className="titleheader" d="M167.295 23.848C167.295 22.6107 166.868 21.7787 166.015 21.352" stroke="white" />
                <path className="titleheader" d="M166.015 21.352C165.162 20.8827 164.074 20.648 162.751 20.648" stroke="white" />
                <path className="titleheader" d="M162.751 20.648C161.13 20.648 159.572 20.7973 158.079 21.096" stroke="white" />
                <path className="titleheader" d="M158.079 21.096C156.586 21.3947 155.092 21.8213 153.599 22.376" stroke="white" />
                <path className="titleheader" d="M153.599 22.376V13.416" stroke="white" />
                <path className="titleheader" d="M153.599 13.416C155.519 12.9893 157.503 12.6053 159.551 12.264" stroke="white" />
                <path className="titleheader" d="M159.551 12.264C161.642 11.88 163.732 11.688 165.823 11.688" stroke="white" />
                <path className="titleheader" d="M165.823 11.688C168.17 11.688 170.324 11.9867 172.287 12.584" stroke="white" />
                <path className="titleheader" d="M172.287 12.584C174.25 13.1386 175.828 14.1626 177.023 15.656" stroke="white" />
                <path className="titleheader" d="M177.023 15.656C178.218 17.1493 178.815 19.2827 178.815 22.056" stroke="white" />
                <path className="titleheader" d="M178.815 22.056V49" stroke="white" />
                <path className="titleheader" d="M178.815 49H168.831" stroke="white" />
                <path className="titleheader" d="M168.831 49L167.295 43.496" stroke="white" />
                <path className="titleheader" d="M167.295 43.496V23.848" stroke="white" />
                <path className="titleheader" d="M164.095 41.064V48.936" stroke="white" />
                <path className="titleheader" d="M164.095 48.936C162.986 49.4053 161.791 49.64 160.511 49.64" stroke="white" />
                <path className="titleheader" d="M160.511 49.64C158.804 49.64 157.204 49.2133 155.711 48.36" stroke="white" />
                <path className="titleheader" d="M155.711 48.36C154.218 47.464 153.002 46.184 152.063 44.52" stroke="white" />
                <path className="titleheader" d="M152.063 44.52C151.124 42.856 150.655 40.8507 150.655 38.504" stroke="white" />
                <path className="titleheader" d="M150.655 38.504C150.655 34.92 151.892 32.1893 154.367 30.312" stroke="white" />
                <path className="titleheader" d="M154.367 30.312C156.884 28.392 160.127 27.4106 164.095 27.368" stroke="white" />
                <path className="titleheader" d="M164.095 27.368V34.152" stroke="white" />
                <path className="titleheader" d="M164.095 34.152C163.412 34.4507 162.858 34.8773 162.431 35.432" stroke="white" />
                <path className="titleheader" d="M162.431 35.432C162.047 35.944 161.855 36.6053 161.855 37.416" stroke="white" />
                <path className="titleheader" d="M161.855 37.416C161.855 38.3973 162.068 39.208 162.495 39.848" stroke="white" />
                <path className="titleheader" d="M162.495 39.848C162.922 40.4453 163.455 40.8507 164.095 41.064" stroke="white" />
                <path className="titleheader" d="M194.31 28.84H182.406" stroke="white" />
                <path className="titleheader" d="M182.406 28.84C182.577 25.5547 183.153 22.8027 184.134 20.584" stroke="white" />
                <path className="titleheader" d="M184.135 20.584C185.159 18.3653 186.481 16.616 188.103 15.336" stroke="white" />
                <path className="titleheader" d="M188.103 15.336C189.767 14.0133 191.601 13.0747 193.607 12.52" stroke="white" />
                <path className="titleheader" d="M193.607 12.52C195.655 11.9653 197.767 11.688 199.943 11.688" stroke="white" />
                <path className="titleheader" d="M199.943 11.688C201.436 11.688 202.801 11.7947 204.039 12.008" stroke="white" />
                <path className="titleheader" d="M204.039 12.008C205.276 12.2213 206.556 12.5413 207.879 12.968" stroke="white" />
                <path className="titleheader" d="M207.879 12.968V27.368" stroke="white" />
                <path className="titleheader" d="M207.878 27.368H201.286" stroke="white" />
                <path className="titleheader" d="M201.287 27.368L200.007 20.712" stroke="white" />
                <path className="titleheader" d="M200.007 20.712C198.257 20.712 196.892 21.3093 195.911 22.504" stroke="white" />
                <path className="titleheader" d="M195.91 22.504C194.972 23.6987 194.438 25.8107 194.31 28.84" stroke="white" />
                <path className="titleheader" d="M182.343 32.104H194.311" stroke="white" />
                <path className="titleheader" d="M194.31 32.104C194.481 35.176 195.164 37.3307 196.358 38.568" stroke="white" />
                <path className="titleheader" d="M196.359 38.568C197.596 39.8053 199.217 40.424 201.223 40.424" stroke="white" />
                <path className="titleheader" d="M201.223 40.424C203.271 40.3813 205.575 40.04 208.135 39.4" stroke="white" />
                <path className="titleheader" d="M208.135 39.4V48.488" stroke="white" />
                <path className="titleheader" d="M208.135 48.488C206.812 48.872 205.255 49.1493 203.463 49.32" stroke="white" />
                <path className="titleheader" d="M203.462 49.32C201.67 49.5333 200.028 49.64 198.534 49.64" stroke="white" />
                <path className="titleheader" d="M198.534 49.64C195.59 49.64 192.924 49.1493 190.534 48.168" stroke="white" />
                <path className="titleheader" d="M190.535 48.168C188.145 47.144 186.225 45.352 184.775 42.792" stroke="white" />
                <path className="titleheader" d="M184.775 42.792C183.324 40.232 182.513 36.6693 182.343 32.104" stroke="white" />
                <path className="titleheader" d="M212.122 12.2H223.642" stroke="white" />
                <path className="titleheader" d="M223.643 12.2V49" stroke="white" />
                <path className="titleheader" d="M223.642 49H212.122" stroke="white" />
                <path className="titleheader" d="M212.122 49V12.2" stroke="white" />
                <path className="titleheader" d="M211.802 0.679993H223.962" stroke="white" />
                <path className="titleheader" d="M223.963 0.679993V9.384" stroke="white" />
                <path className="titleheader" d="M223.962 9.384H211.802" stroke="white" />
                <path className="titleheader" d="M211.802 9.384V0.679993" stroke="white" />
                <path className="titleheader" d="M239.435 28.84H227.531" stroke="white" />
                <path className="titleheader" d="M227.531 28.84C227.702 25.5547 228.278 22.8027 229.259 20.584" stroke="white" />
                <path className="titleheader" d="M229.26 20.584C230.284 18.3653 231.606 16.616 233.228 15.336" stroke="white" />
                <path className="titleheader" d="M233.228 15.336C234.892 14.0133 236.726 13.0747 238.732 12.52" stroke="white" />
                <path className="titleheader" d="M238.732 12.52C240.78 11.9653 242.892 11.688 245.068 11.688" stroke="white" />
                <path className="titleheader" d="M245.068 11.688C246.561 11.688 247.926 11.7947 249.164 12.008" stroke="white" />
                <path className="titleheader" d="M249.164 12.008C250.401 12.2213 251.681 12.5413 253.004 12.968" stroke="white" />
                <path className="titleheader" d="M253.004 12.968V27.368" stroke="white" />
                <path className="titleheader" d="M253.003 27.368H246.411" stroke="white" />
                <path className="titleheader" d="M246.412 27.368L245.132 20.712" stroke="white" />
                <path className="titleheader" d="M245.132 20.712C243.382 20.712 242.017 21.3093 241.036 22.504" stroke="white" />
                <path className="titleheader" d="M241.035 22.504C240.097 23.6987 239.563 25.8107 239.435 28.84" stroke="white" />
                <path className="titleheader" d="M227.468 32.104H239.436" stroke="white" />
                <path className="titleheader" d="M239.435 32.104C239.606 35.176 240.289 37.3307 241.483 38.568" stroke="white" />
                <path className="titleheader" d="M241.484 38.568C242.721 39.8053 244.342 40.424 246.348 40.424" stroke="white" />
                <path className="titleheader" d="M246.348 40.424C248.396 40.3813 250.7 40.04 253.26 39.4" stroke="white" />
                <path className="titleheader" d="M253.26 39.4V48.488" stroke="white" />
                <path className="titleheader" d="M253.26 48.488C251.937 48.872 250.38 49.1493 248.588 49.32" stroke="white" />
                <path className="titleheader" d="M248.587 49.32C246.795 49.5333 245.153 49.64 243.659 49.64" stroke="white" />
                <path className="titleheader" d="M243.659 49.64C240.715 49.64 238.049 49.1493 235.659 48.168" stroke="white" />
                <path className="titleheader" d="M235.66 48.168C233.27 47.144 231.35 45.352 229.9 42.792" stroke="white" />
                <path className="titleheader" d="M229.9 42.792C228.449 40.232 227.638 36.6693 227.468 32.104" stroke="white" />
            </g>
        </svg>
    );
}