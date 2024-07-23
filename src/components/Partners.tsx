'use client'

import { useInViewport } from '@mantine/hooks'

import { PartnerLogo } from '@/components/PartnerLogo'

import { cn } from '@/lib/utils'

export const Partners = () => {
  const { ref, inViewport } = useInViewport()
  return (
    <div className="h-screen snap-center px-12 bg-[#F9F9F2] grid grid-cols-7">
      <div className="bg-[#125AFA] h-screen relative overflow-clip col-span-4">
        <div
          className={cn(
            'w-full absolute bottom-0 bg-[#F9F9F2] py-[48px] px-[64px] flex justify-center flex-wrap gap-6',
            inViewport && 'animate-reveal'
          )}
        >
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
            src="https://s2.coinmarketcap.com/static/img/coins/200x200/30843.png"
          />
        </div>
      </div>
      <div className="flex flex-col justify-end h-full px-[20px] col-span-3">
        <p className="text-[56px] font-bold leading-none" ref={ref}>
          PARTNERS
        </p>
        <p className="font-light text-[#565151] mb-[294px]">
          Adapter maintains strong relationship with its partner to ensure the
          best possible services to its users.
        </p>
      </div>
    </div>
  )
}
