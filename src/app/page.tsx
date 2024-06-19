'use client'

import { useInViewport } from '@mantine/hooks'
import Image from 'next/image'
import Link from 'next/link'

import { useQuery } from '@tanstack/react-query'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { PartnerLogo } from '@/components/PartnerLogo'
import { Partners } from '@/components/Partners'
import { Button } from '@/components/ui/button'

import { useIsMobile } from '@/hooks/use-is-mobile'

import { docsUrl } from '@/lib/constants'
import { getPendleMarketData } from '@/lib/queries/get-pendle-market-data'
import { cn, formatNumber } from '@/lib/utils'

export default function Home() {
  const { ref, inViewport } = useInViewport()
  const mobile = useIsMobile()

  const { data: pendleData } = useQuery({
    queryKey: ['pendleData'],
    queryFn: () => getPendleMarketData(),
  })
  const highestApy = (pendleData?.map(({ impliedApy }) => impliedApy).sort((a, b) => b - a)[0] || 0) * 100

  if (mobile) {
    return (
      <div className="flex flex-col relative snap-y overflow-y-scroll snap-mandatory h-[100dvh]">
        <div className="max-h-[100dvh] flex flex-col snap-center snap-always">
          <img
            src="/brand/logo-landing.svg"
            alt="hero"
            className="object-cover h-[500px] w-full"
          />
          <div className="flex flex-col p-4 gap-4">
            <div className="flex flex-col text-5xl font-bold leading-[0.8]">
              <p>YIELDS</p>
              <p className="text-[#125AFA]">MAXIMIZED</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/vaults">
                <Button className="w-full" variant="inverted">
                  LAUNCH APP
                </Button>
              </Link>
              <a
                href={docsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full"
              >
                <Button variant="secondary" className="w-full">
                  READ DOCS
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="max-h-[100dvh] flex flex-col snap-center snap-always">
          <div className="flex flex-col bg-[#0B0B0A] p-4">
            <div className="flex flex-col leading-[0.8] text-white font-bold text-3xl">
              <p>
                THE FIRST <span className="text-[#125AFA]">PENDLE</span>
              </p>
              <p>
                AUTOCOM<span className="text-[#125AFA]">POUNDER</span>
              </p>
            </div>
            <p className="text-gray font-thin text-xl">
              ZERO FRICTION, EASY YIELD STRATEGIES
            </p>
            <div className="flex flex-col text-white font-light">
              <div className="flex items-center gap-1">
                <Image
                  src="/brand/logo.svg"
                  alt="logo"
                  width={16}
                  height={16}
                />
                <p>Increase yield</p>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src="/brand/logo.svg"
                  alt="logo"
                  width={16}
                  height={16}
                />
                <p>Reduce expenses</p>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src="/brand/logo.svg"
                  alt="logo"
                  width={16}
                  height={16}
                />
                <p>Get an on-chain butler</p>
              </div>
            </div>
            <Link href="/vaults">
              <Button className="w-[300px] mt-4">COMPOUND NOW</Button>
            </Link>
          </div>
          <div className="w-screen bg-[#125AFA] overflow-clip relative h-[480px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[416px] h-[506px]">
              <img
                src="/misc/landing-spinner-mobile.svg"
                alt="spinner"
                className="animate-spin-slow absolute top-0 left-0"
              />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-[#FBFDFD] flex flex-col">
              <div className="flex items-end gap-1">
                <p className="font-bold text-[82px] leading-[0.8]">{formatNumber(highestApy)}</p>
                <p className="text-gray font-bold">%</p>
              </div>
              <p className="text-gray font-light text-sm text-center">
                Current best yield
              </p>
            </div>
          </div>
        </div>
        <div className="min-h-[100dvh] max-h-[100dvh] flex flex-col snap-center snap-always p-4">
          <p className="font-bold text-4xl">PARTNERS</p>
          <p className="text-[#565151] font-light">
            Adapter maintains strong relationships with its partners to ensure
            the best possible services to its users
          </p>
          <div className="flex flex-wrap gap-8 justify-center mt-4">
            <PartnerLogo
              title="Pendle"
              src="https://cryptologos.cc/logos/pendle-pendle-logo.svg?v=032"
            />
            <PartnerLogo
              title="Swell"
              src="https://pbs.twimg.com/profile_images/1628968703911145473/_lB7zEtS_400x400.jpg"
            />
            <PartnerLogo
              title="Karak"
              src="https://pbs.twimg.com/profile_images/1774331469122736129/iSCd1rGu_400x400.jpg"
            />
            <PartnerLogo
              title="Ether.fi"
              src="https://pbs.twimg.com/profile_images/1748000232783147008/JgHFApFy_400x400.jpg"
            />
            <PartnerLogo
              title="Balancer"
              src="https://pbs.twimg.com/profile_images/1656222978919784449/eQgwPTaY_400x400.png"
            />
            <PartnerLogo
              title="Kelp"
              src="https://pbs.twimg.com/profile_images/1719718670610427904/IwyLpOfL_400x400.jpg"
            />
            <PartnerLogo
              title="Renzo"
              src="https://pbs.twimg.com/profile_images/1715232040319160320/LNbYHlBA_400x400.jpg"
            />
          </div>
        </div>
        <Footer scheme="dark" />
      </div>
    )
  } else {
    return (
      <div className="flex flex-col relative snap-y overflow-y-scroll snap-mandatory h-screen">
        <div
          className="h-screen px-12 grid grid-cols-7 snap-center snap-always"
          ref={ref}
        >
          <div className="col-span-4 h-screen">
            <img
              src="/brand/logo-landing.svg"
              alt="hero"
              className="object-cover h-screen w-full"
            />
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
              <a
                href={docsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full"
              >
                <Button variant="secondary" className="h-16 w-full">
                  READ DOCS
                </Button>
              </a>
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
              ZERO FRICTION, EASY YIELD STRATEGIES
            </p>
            <div className="flex flex-col text-white font-light">
              <div className="flex items-center gap-1">
                <Image
                  src="/brand/logo.svg"
                  alt="logo"
                  width={16}
                  height={16}
                />
                <p>Increase yield</p>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src="/brand/logo.svg"
                  alt="logo"
                  width={16}
                  height={16}
                />
                <p>Reduce expenses</p>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src="/brand/logo.svg"
                  alt="logo"
                  width={16}
                  height={16}
                />
                <p>Get an on-chain butler</p>
              </div>
            </div>
            <Link href="/vaults">
              <Button className="w-[300px] h-16">COMPOUND NOW</Button>
            </Link>
          </div>
          <div className="w-[802px] bg-[#125AFA] overflow-clip relative h-screen">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[495px] h-[3033px]">
              <img
                src="/misc/landing-spinner.svg"
                alt="spinner"
                className="animate-spin-slow absolute top-0 left-0"
              />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-[#FBFDFD] flex flex-col">
              <div className="flex items-end gap-1">
                <p className="font-bold text-[82px] leading-[0.8]">{formatNumber(highestApy)}</p>
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
}
