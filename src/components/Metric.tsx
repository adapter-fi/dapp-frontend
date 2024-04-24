import Image from 'next/image'

import { formatNumber } from '@/lib/utils'

import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export const Metric = ({
  label,
  amount,
  unit,
}: {
  label: string
  amount: number | string
  unit: string
}) => {
  return (
    <div className="flex flex-col">
      <Tooltip>
        <TooltipTrigger className="flex gap-0.5 text-gray w-fit">
          <p className="text-md font-light">{label}</p>
          <Image src="/icons/info.svg" width={12} height={12} alt="info" />
        </TooltipTrigger>
        <TooltipContent>Some copy here</TooltipContent>
      </Tooltip>
      <div className="flex items-end gap-1">
        <p className="text-[64px] font-bold leading-none">
          {formatNumber(amount)}
        </p>
        <p className="uppercase text-gray font-bold -translate-y-1">{unit}</p>
      </div>
    </div>
  )
}
