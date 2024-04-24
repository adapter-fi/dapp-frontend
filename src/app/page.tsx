import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="p-8">
      <Link href="/vaults">
        <Button>Launch App</Button>
      </Link>
    </div>
  )
}
