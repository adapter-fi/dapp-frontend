import Image from 'next/image'

import {
  discordUrl,
  docsUrl,
  githubUrl,
  telegramUrl,
  twitterUrl,
} from '@/lib/constants'
import { cn } from '@/lib/utils'

import { Copyright, Github } from 'lucide-react'

export const Footer = ({ scheme = 'light' }: { scheme: 'light' | 'dark' }) => {
  return (
    <div
      className={cn(
        'flex justify-center',
        scheme === 'light'
          ? 'border-[#3B3B39] border-t-2'
          : 'bg-[#0B0B0A] text-[#FBFDFD]'
      )}
    >
      <div className="grid md:grid-cols-3 items-start md:p-12 p-4 snap-end md:gap-0 gap-4 w-screen max-w-[1280px] ">
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-end">
            <Image src="/brand/logo.svg" width={64} height={64} alt="logo" />
            <div className="flex gap-1 items-center">
              <Copyright size={16} />
              <p className="text-gray font-light">2024 Adapter.fi</p>
            </div>
          </div>
          <div className="md:flex flex-col text-gray text-sm hidden">
            <a target="_blank" href="/Adapter.Fi-Privacy-Policy.pdf">
              Privacy Policy
            </a>
            <a target="_blank" href="/Adapter.Fi-TOS.pdf">
              Terms of Service
            </a>
          </div>
        </div>

        <p className="text-sm text-gray md:hidden block">COMMUNITY</p>
        <div className="md:flex md:flex-col gap-2 grid grid-cols-2">
          <p className="text-sm text-gray hidden md:block">COMMUNITY</p>
          <a
            href={twitterUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex pl-1 gap-1 items-center opacity-80 hover:opacity-100"
          >
            <Image src="/icons/x.svg" height={16} width={16} alt="twitter" />
            <p className="pl-1">X</p>
          </a>
          <a
            href={telegramUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex gap-1 items-center opacity-80 hover:opacity-100"
          >
            <Image
              src="/icons/telegram.svg"
              height={24}
              width={24}
              alt="telegram"
            />
            <p>TELEGRAM</p>
          </a>
          <a
            href={discordUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex gap-1 items-center opacity-80 hover:opacity-100"
          >
            <Image
              src="/icons/discord.svg"
              height={24}
              width={24}
              alt="discord"
            />
            <p>DISCORD</p>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex gap-1 items-center opacity-80 hover:opacity-100"
          >
            <Github size={24} />
            <p>GITHUB</p>
          </a>
        </div>
        <p className="text-sm text-gray md:hidden block">DOCUMENTATION</p>
        <div className="md:flex md:flex-col gap-2 grid grid-cols-2">
          <p className="text-sm text-gray hidden md:block">DOCUMENTATION</p>
          <a
            href={docsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex gap-1 items-center opacity-80 hover:opacity-100"
          >
            <Image src="/icons/docs.svg" height={24} width={24} alt="docs" />
            <p>GITBOOK</p>
          </a>
        </div>
        <div className="flex flex-col text-gray text-sm md:hidden">
          <a target="_blank" href="/Adapter.Fi-Privacy-Policy.pdf">
            Privacy Policy
          </a>
          <a target="_blank" href="/Adapter.Fi-TOS.pdf">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  )
}
