import { Metric } from '@/components/Metric'
import { VaultActions } from '@/components/VaultActions'

import { vaultMap } from '@/lib/constants'

export default function VaultPage({
  params: { slug },
}: {
  params: { slug: keyof typeof vaultMap }
}) {
  return (
    <div className="flex flex-col">
      <div className="bg-[#125AFA] border border-[#0E47C5] px-12 pt-12 pb-4 flex flex-col">
        <div className="flex gap-1 items-center">
          <img
            src="https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=031"
            alt="dai"
            height={80}
            width={80}
          />
          <p className="text-[82px] font-bold">{slug.toLocaleUpperCase()}</p>
          <div className="p-2 bg-[#20CD7A] text-[#125AFA] rounded-[4px] self-start ml-2">
            BOOSTED
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-4 gap-32 p-6">
          <Metric label="TVL" amount="0" unit="USD" size="sm" />
          <Metric
            label={'a' + slug.toLocaleUpperCase() + ' Balance'}
            amount="0"
            unit={'a' + slug.toLocaleUpperCase()}
            size="sm"
          />
          <Metric label="Yield" amount="0" unit="%" size="sm" />
          <Metric
            label="Rewards Earned"
            amount="0"
            unit={'a' + slug.toLocaleUpperCase()}
            size="sm"
          />
        </div>
        <VaultActions slug={slug} />
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(vaultMap).map((slug) => ({ slug }))
}

export const dynamicParams = false
