import { NextRequest, NextResponse } from 'next/server'

import { isAddress } from 'viem'

export const revalidate = 86400 // 1 day

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const address = searchParams.get('a')
  if (!address || !isAddress(address)) {
    return NextResponse.json(
      { error: 'Invalid or no address provided' },
      { status: 400 }
    )
  }

  const res = await fetch(
    `https://pro-openapi.debank.com/v1/user/total_balance?id=${address}`,
    {
      headers: {
        accept: 'application/json',
        AccessKey: process.env.DEBANK_API_KEY as string,
      },
    }
  ).then((res) => res.json())

  return NextResponse.json({ address, value: res.total_usd_value })
}
