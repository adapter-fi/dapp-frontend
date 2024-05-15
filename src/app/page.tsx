'use client'

import { useInViewport } from '@mantine/hooks'
import Image from 'next/image'
import Link from 'next/link'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Partners } from '@/components/Partners'
import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'

export default function Home() {
  const { ref, inViewport } = useInViewport()
  return (
    <div className="flex flex-col relative snap-y overflow-y-scroll snap-mandatory h-screen">
      <div
        className="h-screen px-12 grid grid-cols-7 snap-center snap-always"
        ref={ref}
      >
        <div className="col-span-4 h-screen">
          <img src="/brand/logo-landing.svg" alt="hero" />
        </div>
        <div className="flex flex-col justify-end py-12 px-3 gap-4 col-span-3 h-screen">
          <div className="flex flex-col text-[88px] font-bold leading-[0.8]">
            <p>YIELDS</p>
            <p className="text-[#125AFA]">MAXIMIZED</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Link href="/vaults">
              <Button className="w-full h-16" variant="inverted">
                LAUNCH APP
              </Button>
            </Link>
            <Button variant="secondary" className="h-16">
              READ DOCS
            </Button>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'sticky top-0 z-10 text-[#F9F9F2] bg-[#0B0B0A] snap-align-none',
          inViewport && 'hidden'
        )}
      >
        <Navbar />
      </div>
      <div className="min-h-screen snap-center snap-always flex px-12 bg-[#0B0B0A]">
        <div className="flex flex-col gap-2 min-w-[662px] justify-end pb-[118px]">
          <div className="flex flex-col leading-[0.8] text-white font-bold text-[56px]">
            <p>
              THE FIRST <span className="text-[#125AFA]">PENDLE</span>
            </p>
            <p>
              AUTOCOM<span className="text-[#125AFA]">POUNDER</span>
            </p>
          </div>
          <p className="text-gray font-thin text-2xl">
            ZERO FRICTION, EAST YIELD STRATEGIES
          </p>
          <div className="flex flex-col text-white font-light">
            <div className="flex items-center gap-1">
              <Image src="/brand/logo.svg" alt="logo" width={16} height={16} />
              <p>Increase yield</p>
            </div>
            <div className="flex items-center gap-1">
              <Image src="/brand/logo.svg" alt="logo" width={16} height={16} />
              <p>Reduce expenses</p>
            </div>
            <div className="flex items-center gap-1">
              <Image src="/brand/logo.svg" alt="logo" width={16} height={16} />
              <p>Get an on-chain butler</p>
            </div>
          </div>
          <Button className="w-[300px] h-16">COMPOUND NOW</Button>
        </div>
        <div className="w-[802px] bg-[#125AFA] overflow-clip relative">
          <img
            src="/misc/landing-spinner.svg"
            alt="spinner"
            className="animate-spin-slow"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2  text-[#FBFDFD] flex flex-col">
            <div className="flex items-end gap-1">
              <p className="font-bold text-[82px] leading-[0.8]">69.42</p>
              <p className="text-gray font-bold">%</p>
            </div>
            <p className="text-gray font-light text-sm text-center">
              Current best yield
            </p>
          </div>
        </div>
      </div>
      <Partners />
      <Footer scheme="dark" />
    </div>
  )
}
