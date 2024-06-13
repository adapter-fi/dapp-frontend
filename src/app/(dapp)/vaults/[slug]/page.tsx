import { Metric } from '@/components/Metric'
import { VaultActions } from '@/components/VaultActions'

import { SupportedVaults, vaultMap } from '@/lib/constants'

export default function VaultPage({
  params: { slug },
}: {
  params: { slug: keyof typeof vaultMap }
}) {
  const vaultName = Object.keys(vaultMap).filter(
    (key) => key.toLocaleLowerCase() === slug
  )[0] as SupportedVaults
  const { logoURI } = vaultMap[vaultName]

  return (
    <div className="flex flex-col">
      <div className="bg-[#125AFA] border border-[#0E47C5] px-12 pt-12 pb-4 flex flex-col">
        <div className="flex gap-1 items-center">
          <img
            src={logoURI}
            alt={vaultName}
            height={80}
            width={80}
          />
          <p className="text-[82px] font-bold">{vaultName}</p>
          <div className="p-2 bg-[#20CD7A] text-[#125AFA] rounded-[4px] self-start ml-2">
            BOOSTED
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-4 gap-32 p-6">
          <Metric label="TVL" amount="0" unit="USD" size="sm" />
          <Metric
            label={'a' + vaultName + ' Balance'}
            amount="0"
            unit={'a' + vaultName}
            size="sm"
          />
          <Metric label="Yield" amount="0" unit="%" size="sm" />
          <Metric
            label="Rewards Earned"
            amount="0"
            unit={'a' + vaultName}
            size="sm"
          />
        </div>
        <VaultActions slug={vaultName} />
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(vaultMap).map((slug) => ({
    slug: slug.toLocaleLowerCase(),
  }))
}

export const dynamicParams = false
