import { Metric } from '@/components/Metric'
import { VaultsChart } from '@/components/VaultsChart'

export default function VaultHomepage() {
  return (
    <div className="flex flex-col">
      <div className="bg-[#125AFA] border border-[#0E47C5] px-12 pt-12 pb-4 flex flex-col">
        <div className="flex flex-col">
          <p className="text-2xl font-bold mb-[-8px]">ADAPTER VAULTS</p>
          <p className="text-gray font-light">
            Deposit, get yield, simple as that.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-12">
          <p className="self-end font-light">
            Adapter vaults allocate tokens to whitelisted partner markets
            following managed strategies to obtain{' '}
            <b className="font-bold">best-in-class</b> yields.
          </p>
          <div className="flex flex-col gap-4">
            <Metric label="Total Deposits" amount={0} unit="USD" />
          </div>
        </div>
      </div>
      <VaultsChart />
    </div>
  )
}
