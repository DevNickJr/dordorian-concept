import React from 'react'
import RetroGrid from '../ui/retro-grid'
import Link from 'next/link'
import { RainbowButton } from '../ui/rainbow-button'

const Hero = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background lg:h-screen lg:-mt-20 -z-10">
      
      <div className="flex flex-col gap-7 items-center text-center p-4 pt-12 max-w-[360px] md:max-w-[800px] mx-auto text-muted text-sm relative">
        <h1 className="pointer-events-none z-10 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
          Dordorian Concept
        </h1>

        <h2 className="hidden text-2xl leading-relaxed md:block text-primary">
          Empowering Growth, Innovation & Success
        </h2>
        <p className="font-[449] md:hidden text-primary">
          At Dordorian Concept Ltd, we offer integrated solutions in marketing, consultancy, real estate, and education.
        </p>

        <p className="hidden text-xl leading-relaxed md:block text-primary">
          Discover limitless opportunities with Dordorian Concept Ltd. We provide integrated solutions in marketing, consultancy, real estate, and education, empowering individuals and businesses to thrive.
        </p>
        

        <Link href={'/contact'}>
          <RainbowButton>
            Get Started
          </RainbowButton>
          </Link>
      </div>

      <RetroGrid />
    </div>
  )
}

export default Hero
