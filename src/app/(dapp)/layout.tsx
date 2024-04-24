import { ReactNode } from 'react'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export default function DappLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#0B0B0A] min-h-screen min-w-screen text-[#FBFDFD] flex flex-col justify-between">
      <div className="flex flex-col">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  )
}
