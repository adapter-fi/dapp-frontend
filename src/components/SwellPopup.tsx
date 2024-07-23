import { useLocalStorage } from '@mantine/hooks'
import { CheckedState } from '@radix-ui/react-checkbox'
import { Close } from '@radix-ui/react-dialog'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent } from '@/components/ui/dialog'

export const SwellPopup = () => {
  const [clicked, setClicked] = useLocalStorage({
    key: 'swell-popup-clicked',
    defaultValue: false,
  })
  const [checked, setChecked] = useState<CheckedState>(false)

  if (clicked) return null
  return (
    <Dialog defaultOpen onOpenChange={() => setClicked(checked as boolean)}>
      <DialogContent className="flex flex-col px-2 pt-[40px] pb-4 max-w-3xl text-center gap-0">
        <div className="px-2 pt-2 pb-4 flex flex-col gap-4 items-center">
          <p className="uppercase text-[#FBFDFD] text-[42px] leading-[40px] font-bold">
            Migrate your swell vaults
          </p>
          <img
            src="/misc/swell-banner.svg"
            alt="Swell Finance"
            className="w-full h-[120px] rounded-[12px]"
          />
          <div className="text-[#C4C5C5] flex flex-col gap-3">
            <p>
              As Swell Finance&apos;s vaults approach maturity, it&apos;s time
              to maximize your gains. <br /> Don&apos;t let your investments sit
              idle.
            </p>
            <p>
              Migrate to <b>Adapter.Fi</b> to autocompound your profits. <br />{' '}
              Compound your yield to capitalize on the next opportunities.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Checkbox checked={checked} onCheckedChange={setChecked} />
            <p className="text-[#A29D92] font-light">
              Don&apos;t show this again
            </p>
          </div>
        </div>
        <Close asChild>
          <Link href="/vaults/rsweth-1" className="mx-2">
            <Button className="uppercase w-full">Migrate Now</Button>
          </Link>
        </Close>
      </DialogContent>
    </Dialog>
  )
}
