import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const address = searchParams.get('address')
  if (!address) {
    return NextResponse.json({ error: 'No address provided' }, { status: 400 })
  }
  const points = await fetch(
    `https://adapterfi.index.biggestlab.io/wallet/${address}/points/`,
    {
      headers: {
        Authorization: `Bearer ${process.env.ADAPTER_API_KEY}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  ).then((res) => res.json().then((data) => data.points))
  return NextResponse.json({ points })
}
