import Image from 'next/image'

import { Copyright } from 'lucide-react'

export const Footer = () => {
  return (
    <div className="grid grid-cols-3 items-start p-12">
      <div className="flex items-end">
        <Image src="/brand/logo.png" width={64} height={64} alt="logo" />
        <div className="flex gap-1 items-center">
          <Copyright size={16} />
          <p className="text-gray font-light">2024 Adapter.fi</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray">COMMUNITY</p>
        <div className="flex gap-1 items-center">
          <Image
            src="/icons/twitter.svg"
            height={24}
            width={24}
            alt="twitter"
          />
          <p>TWITTER</p>
        </div>
        <div className="flex gap-1 items-center">
          <Image
            src="/icons/telegram.svg"
            height={24}
            width={24}
            alt="telegram"
          />
          <p>TELEGRAM</p>
        </div>
        <div className="flex gap-1 items-center">
          <Image
            src="/icons/discord.svg"
            height={24}
            width={24}
            alt="discord"
          />
          <p>DISCORD</p>
        </div>
        <div className="flex gap-1 items-center">
          <Image
            src="/icons/youtube.svg"
            height={24}
            width={24}
            alt="youtube"
          />
          <p>YOUTUBE</p>
        </div>
        <div className="flex gap-1 items-center">
          <Image src="/icons/forum.svg" height={24} width={24} alt="forum" />
          <p>FORUM</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray">DOCUMENTATION</p>
        <div className="flex gap-1 items-center">
          <Image src="/icons/docs.svg" height={24} width={24} alt="docs" />
          <p>GITBOOK</p>
        </div>
        <div className="flex gap-1 items-center">
          <Image src="/icons/mirror.svg" height={24} width={24} alt="mirror" />
          <p>BLOG</p>
        </div>
      </div>
    </div>
  )
}
