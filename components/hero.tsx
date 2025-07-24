"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function HeroSection() {
    const router = useRouter();
    const imageRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const imageElement = imageRef.current;
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;
            if (scrollPosition > scrollThreshold) {
                imageElement?.classList.add("scrolled"); // this will add the scrolled class
            }
            else imageElement?.classList.remove("scrolled");

        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return <div className="pb-20 px-4">
        <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
                Manage Your Finances
                <br />
                with Intelligence
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto ">
                An AI-powered financial managment platform that helps you track,
                anyalze, and optimize your spending with real-time insights
            </p>
            <Button onClick={() => router.push("/dashboard")}>
                Get Started
            </Button>
            <div className="hero-image-wrapper ">
                <div ref={imageRef} className="hero-image">
                    <Image
                        src="/banner.jpeg"
                        alt="Dashboard Preview"
                        width={1280}
                        height={720}
                        className="rounded-lg shadow-2xl border mx-auto"
                        priority
                    />
                </div>

            </div>

        </div>
    </div>
}