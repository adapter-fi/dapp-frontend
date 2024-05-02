import { cn, formatNumber } from '@/lib/utils'

export const Metric = ({
  label,
  amount,
  unit,
  size = 'lg',
}: {
  label: string
  amount: number | string
  unit?: string
  size?: 'sm' | 'lg'
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-end gap-1">
        <p
          className={cn(
            'font-bold',
            size === 'lg' ? 'text-[42px] h-[52px]' : 'text-2xl'
          )}
        >
          {formatNumber(amount)}
        </p>
        {unit && <p className={cn('text-gray font-bold')}>{unit}</p>}
      </div>
      <p className="text-gray font-light">{label}</p>
    </div>
  )
}
