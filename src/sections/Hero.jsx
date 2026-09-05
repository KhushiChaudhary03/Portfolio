import React, { useEffect, useRef, useState } from "react"
import { words } from '../constants/index.js'
import Button from "../components/Button.jsx"
import SocialLinks from "../components/SocialLinks.jsx"
import HeroVisual from "../components/HeroVisual.jsx"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'

const Hero = () => {
    const [wordIndex, setWordIndex] = useState(0)
    const wordRef = useRef(null)

    // Intro reveal for the static headline lines
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.15, duration: 0.9, ease: 'expo.out' }
        )
        gsap.fromTo('.hero-fade-in',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, delay: 0.3, ease: 'expo.out' }
        )
    }, [])

    // Cycle through the rotating word on a timer, driven by GSAP rather
    // than a CSS keyframe loop tied to a hardcoded list length
    useEffect(() => {
        const id = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length)
        }, 2200)
        return () => clearInterval(id)
    }, [])

    useGSAP(() => {
        if (!wordRef.current) return
        gsap.fromTo(wordRef.current,
            { y: 26, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out' }
        )
    }, [wordIndex])

    const currentWord = words[wordIndex]

    return (
        <section id="hero" className="relative overflow-hidden">
            {/* ambient background: soft gradient blobs + dotted grid, restrained */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="blob w-[32rem] h-[32rem] bg-violet-600/25 -top-40 -left-40 animate-pulse-glow" />
                <div className="blob w-[26rem] h-[26rem] bg-fuchsia-600/15 top-10 -right-20" />
                <div className="blob w-[22rem] h-[22rem] bg-sky-500/15 bottom-0 left-1/3" />
                <div className="absolute inset-0 bg-dot-grid opacity-60" />
            </div>

            <div className="hero-layout">
                {/* left-side */}
                <header className="flex flex-col justify-center w-full md:w-[54%] xl:w-1/2 relative z-10">
                    <div className="flex flex-col gap-6">
                        <div className="hero-badge w-fit hero-fade-in">
                            <span className="inline-block size-2 rounded-full bg-emerald-400 mr-2 align-middle animate-pulse" />
                            CS Undergrad &middot; Full-Stack Developer
                        </div>
                        <div className="hero-text">
                            <h1>Building <span className="slide">
                                <span ref={wordRef} className="flex items-center md:gap-3 gap-1 pb-2">
                                    <img src={currentWord.imgPath} alt={currentWord.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400" />
                                    <span className="gradient-text">{currentWord.text}</span>
                                </span>
                            </span></h1>
                            <h1>that Solve <span className="gradient-text-cool">Real Problems</span></h1>
                        </div>
                        <p className="text-white-50 md:text-xl text-base relative z-10 pointer-events-none max-w-xl hero-fade-in">
                            I'm Khushi — a Computer Science undergrad who builds full-stack &amp; AI-powered products, from real-time apps to ATS resume tools.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mt-2 hero-fade-in">
                            <Button className="md:w-72 w-full sm:w-auto" id="work" text="Explore My Work" icon="arrow" variant="primary" />
                            <Button
                                className="md:w-72 w-full sm:w-auto"
                                href="/resume.pdf"
                                download
                                text="Download Resume"
                                icon="download"
                                variant="outline"
                            />
                        </div>

                        <div className="flex items-center gap-4 mt-2 hero-fade-in">
                            <SocialLinks />
                        </div>
                    </div>
                </header>
                {/* right-side */}
                <figure className="relative z-10 w-full md:w-[42%] xl:w-1/2 hero-fade-in">
                    <div className="hero-3d-layout bg-dot-grid">
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="size-72 md:size-96 rounded-full bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-sky-500/10 blur-3xl" />
                        </div>
                        <HeroVisual />
                    </div>
                </figure>
            </div>
        </section>
    )
}

export default Hero
