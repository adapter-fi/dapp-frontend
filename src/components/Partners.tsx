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
            title="Pendle"
            src="https://cryptologos.cc/logos/pendle-pendle-logo.svg?v=032"
          />
          <PartnerLogo
            title="Pendle"
            src="https://cryptologos.cc/logos/pendle-pendle-logo.svg?v=032"
          />
          <PartnerLogo
            title="Pendle"
            src="https://cryptologos.cc/logos/pendle-pendle-logo.svg?v=032"
          />
          <PartnerLogo
            title="Pendle"
            src="https://cryptologos.cc/logos/pendle-pendle-logo.svg?v=032"
          />
          <PartnerLogo
            title="Pendle"
            src="https://cryptologos.cc/logos/pendle-pendle-logo.svg?v=032"
          />
          <PartnerLogo
            title="Pendle"
            src="https://cryptologos.cc/logos/pendle-pendle-logo.svg?v=032"
          />
          <PartnerLogo
            title="Pendle"
            src="https://cryptologos.cc/logos/pendle-pendle-logo.svg?v=032"
          />
          <PartnerLogo
            title="Pendle"
            src="https://cryptologos.cc/logos/pendle-pendle-logo.svg?v=032"
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
