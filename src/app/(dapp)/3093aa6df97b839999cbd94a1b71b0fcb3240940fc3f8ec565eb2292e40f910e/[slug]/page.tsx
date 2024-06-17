import { VaultActions } from '@/components/VaultActions'
import { VaultMetrics } from '@/components/VaultMetrics'

import { SupportedVaults, vaultMap } from '@/lib/constants'
import { removeSpaces } from '@/lib/utils'

export default function VaultPage({
  params: { slug },
}: {
  params: { slug: keyof typeof vaultMap }
}) {
  const normalizedSlug = slug.replace('(', ' (')
  const vaultSlug = Object.keys(vaultMap).filter(
    (key) => key.toLocaleLowerCase() === normalizedSlug
  )[0] as SupportedVaults

  const { logoURI, vaultAddress } = vaultMap[vaultSlug]
  const vaultName = vaultSlug.slice(0, normalizedSlug.indexOf('-'))

  return (
    <div className="flex flex-col">
      <div className="bg-[#125AFA] border border-[#0E47C5] px-12 pt-12 pb-4 flex flex-col">
        <div className="flex gap-1 items-center">
          <img src={logoURI} alt={vaultName} height={80} width={80} />
          <p className="text-[82px] font-bold">{vaultName}</p>
          <div className="p-2 bg-[#20CD7A] text-[#125AFA] rounded-[4px] self-start ml-2">
            BOOSTED
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <VaultMetrics vaultName={vaultName} slug={vaultSlug} vaultAddress={vaultAddress}/>
        <VaultActions slug={vaultSlug} />
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(vaultMap).map((slug) => ({
    slug: removeSpaces(slug.toLocaleLowerCase()),
  }))
}

export const dynamicParams = false
