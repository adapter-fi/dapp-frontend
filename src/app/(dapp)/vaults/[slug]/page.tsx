import { Metric } from '@/components/Metric'
import { VaultActions } from '@/components/VaultActions'

export default function VaultPage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col">
      <div className="bg-[#125AFA] border border-[#0E47C5] px-12 pt-12 pb-4 flex flex-col">
        <div className="flex gap-1 items-center">
          <img
            src="https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=031"
            alt="dai"
            height={128}
            width={128}
          />
          <p className="text-9xl font-bold">DAI</p>
          <div className="p-2 bg-[#20CD7A] text-[#125AFA] rounded-[4px] self-start ml-2">
            BOOSTED
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-4 gap-32 p-6">
          <Metric label="TVL" amount="0" unit="USD" size="sm" />
          <Metric label="aDAI Balance" amount="0" unit="aDAI" size="sm" />
          <Metric label="Yield" amount="42" unit="%" size="sm" />
          <Metric label="Rewards Earned" amount="12.3" unit="aDAI" size="sm" />
        </div>
        <VaultActions />
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return [{ slug: 'dai' }, { slug: 'steth' }]
}

export const dynamicParams = false
