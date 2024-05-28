import { NextResponse } from 'next/server'

import { getUsers } from '@/lib/db/get-users'

export const dynamic = 'force-dynamic'

export async function GET() {
  const users = await getUsers()
  return NextResponse.json({ users, status: 200 })
}
