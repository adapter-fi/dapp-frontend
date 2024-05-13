import Image from 'next/image'

import { cn } from '@/lib/utils'

import { Copyright } from 'lucide-react'

export const Footer = ({ scheme = 'light' }: { scheme: 'light' | 'dark' }) => {
  return (
    <div
      className={cn(
        'grid grid-cols-3 items-start p-12',
        scheme === 'light' ? 'border-[#3B3B39] border-t-2' : 'bg-[#0B0B0A] text-[#FBFDFD]'
      )}
    >
      <div className="flex items-end">
        <Image src="/brand/logo.svg" width={64} height={64} alt="logo" />
        <div className="flex gap-1 items-center">
          <Copyright size={16} />
          <p className="text-gray font-light">2024 Adapter.fi</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray">COMMUNITY</p>
        <button className="flex gap-1 items-center opacity-80 hover:opacity-100">
          <Image
            src="/icons/twitter.svg"
            height={24}
            width={24}
            alt="twitter"
          />
          <p>TWITTER</p>
        </button>
        <button className="flex gap-1 items-center opacity-80 hover:opacity-100">
          <Image
            src="/icons/telegram.svg"
            height={24}
            width={24}
            alt="telegram"
          />
          <p>TELEGRAM</p>
        </button>
        <button className="flex gap-1 items-center opacity-80 hover:opacity-100">
          <Image
            src="/icons/discord.svg"
            height={24}
            width={24}
            alt="discord"
          />
          <p>DISCORD</p>
        </button>
        <button className="flex gap-1 items-center opacity-80 hover:opacity-100">
          <Image
            src="/icons/youtube.svg"
            height={24}
            width={24}
            alt="youtube"
          />
          <p>YOUTUBE</p>
        </button>
        <button className="flex gap-1 items-center opacity-80 hover:opacity-100">
          <Image src="/icons/forum.svg" height={24} width={24} alt="forum" />
          <p>FORUM</p>
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray">DOCUMENTATION</p>
        <button className="flex gap-1 items-center opacity-80 hover:opacity-100">
          <Image src="/icons/docs.svg" height={24} width={24} alt="docs" />
          <p>GITBOOK</p>
        </button>
        <button className="flex gap-1 items-center opacity-80 hover:opacity-100">
          <Image src="/icons/mirror.svg" height={24} width={24} alt="mirror" />
          <p>BLOG</p>
        </button>
      </div>
    </div>
  )
}
