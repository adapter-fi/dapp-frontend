import { Metric } from '@/components/Metric'
import { Button } from '@/components/ui/button'

import { Vault, columns } from '@/app/(dapp)/vaults//columns'
import { DataTable } from '@/app/(dapp)/vaults/data-table'

const fakeData: Vault[] = [
  {
    data: {
      name: 'DAI',
      type: 'Stable',
      protocolURI: 'https://www.pendle.finance/uploads/wp-content/uploads/2022/brandguide/logos/light-png/blue.png',
      logoURI: 'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=031',
    },
    underlyingAPR: 10,
    autocompoundedAPY: 20,
    points: {},
    holdings: {},
    deposits: {},
  },
]

export default function VaultHomepage() {
  return (
    <div className="flex flex-col">
      <div className="bg-[#125AFA] border border-[#0E47C5] px-12 pt-12 pb-4 flex flex-col">
        <div className="flex flex-col">
          <p className="text-2xl font-bold mb-[-11px]">ADAPTER VAULTS</p>
          <p className="text-gray font-light">
            Deposit, get yield, simple as that.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-12">
          <div className="flex flex-col mt-5 text-sm">
            <p>
              Adapter.FI ERC-4626 vaults react in real time to interest rate
              fluctuations across DeFi venues by rebalancing their allocations
              in a manner that maximizes yield between different whitelisted
              lending platforms.
            </p>
            <p className="text-gray">
              Our vaults allow anyone to participate in this rebalancing process
              and encourage the decentralization of it by incentivizing part of
              the yield that the respective vaults generate from a rebalancing
              proposal.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Metric label="Deposits" amount={420} unit="USD" />
            <Button variant="outline" className="w-[265px]">
              VIEW DETAILS
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Metric label="Earnings" amount={69} unit="USD" />
            <Button variant="outline" className="w-[265px]">
              CLAIM
            </Button>
          </div>
        </div>
      </div>
      <DataTable columns={columns} data={fakeData} />
    </div>
  )
}
