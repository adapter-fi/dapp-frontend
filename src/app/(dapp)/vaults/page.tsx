import { Metric } from '@/components/Metric'
import { Button } from '@/components/ui/button'

import { Vault, columns } from '@/app/(dapp)/vaults//columns'
import { DataTable } from '@/app/(dapp)/vaults/data-table'

import { ArrowUpRight } from 'lucide-react'

const fakeData: Vault[] = [
  {
    data: {
      name: 'DAI',
      type: 'Stable',
      protocolURI:
        'https://www.pendle.finance/uploads/wp-content/uploads/2022/brandguide/logos/light-png/blue.png',
      logoURI:
        'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=031',
    },
    underlyingAPR: 10,
    autocompoundedAPY: 20,
    points: 0,
    holdings: 0,
    deposits: 0,
  },
  {
    data: {
      name: 'stETH',
      type: 'LST',
      logoURI:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a411426-3711-47d4-9c1a-dcf72973ddfc/dfj383a-9b60ef9a-e2f5-4efb-8f0c-3b37c292d240.png/v1/fill/w_1280,h_1280/lido_steth_logo_by_saphyl_dfj383a-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzlhNDExNDI2LTM3MTEtNDdkNC05YzFhLWRjZjcyOTczZGRmY1wvZGZqMzgzYS05YjYwZWY5YS1lMmY1LTRlZmItOGYwYy0zYjM3YzI5MmQyNDAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1wZEWvUnDhC9W4r_4wGEXrLFVYD5h7yBXT8tm9DVqvI',
      protocolURI:
        'https://www.pendle.finance/uploads/wp-content/uploads/2022/brandguide/logos/light-png/blue.png',
    },

    underlyingAPR: 4,
    autocompoundedAPY: 8,
    points: 0,
    holdings: 0,
    deposits: 0,
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
        <div className="grid grid-cols-4 gap-12">
          <p className="self-end font-light">
            Adapter vaults allocate tokens to whitelisted partner markets
            following managed strategies to obtain{' '}
            <b className="font-bold">best-in-class</b> yields.
          </p>
          <div className="flex flex-col gap-4">
            <Metric label="Deposits" amount={420} unit="USD" />
            <Button
              variant="outline"
              className="w-[265px]"
              icon={<ArrowUpRight />}
            >
              VIEW DETAILS
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Metric label="Earnings" amount={69} unit="USD" />
            <Button
              variant="outline"
              className="w-[265px]"
              icon={<ArrowUpRight />}
            >
              CLAIM
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Metric label="Points" amount={6900} />
            <Button
              variant="outline"
              className="w-[265px]"
              icon={<ArrowUpRight />}
            >
              LEADERBOARD
            </Button>
          </div>
        </div>
      </div>
      <DataTable columns={columns} data={fakeData} />
    </div>
  )
}
