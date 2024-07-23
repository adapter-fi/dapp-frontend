import { formatPercentage } from '@/lib/utils'
import Link from 'next/link'

export const YieldCard = ({
  src,
  title,
  amount,
  link,
}: {
  src: string
  title: string
  amount: number
  link: string
}) => {
  return (
    <Link href={link} className="flex md:w-fit w-full items-center gap-2 p-4 rounded-[8px] border-2 border-[#125AFA] bg-[#F9F9F2] shadow-xl">
      <div className="flex flex-col items-center">
        <img src={src} alt="amount" className="h-[40px] w-[40px]" />
        <p className="text-sm font-bold text-[#060606] leading-[18px]">
          {title}
        </p>
      </div>
      <div className="flex flex-col self-end gap-1">
        <p className="text-[26px] font-bold text-[#319603] leading-[24px]">
          {formatPercentage(amount)}
        </p>
        <p className="text-sm font-bold text-[#565151] leading-[18px]">
          fixed yield
        </p>
      </div>
    </Link>
  )
}
