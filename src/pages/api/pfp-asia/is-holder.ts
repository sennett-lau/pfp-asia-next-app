import { connectDB } from '@/app/lib/mongodb'
import { OPENSEA_API_URL, PFPASIA_CONTRACT_ADDRESS } from '@/config/links'
import axios from 'axios'
import dotenv from 'dotenv'
import type { NextApiRequest, NextApiResponse } from 'next'

dotenv.config()

type Res = {
  isHolder: boolean
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Res>) => {
  await connectDB()

  // get address from query
  const { address } = req.query

  const chain = 'ethereum'
  const contractAddress = PFPASIA_CONTRACT_ADDRESS

  const header = {
    accept: 'application/json',
    'x-api-key': process.env.OPENSEA_API_KEY,
  }
  const resp = await axios.get(
    `${OPENSEA_API_URL}/chain/${chain}/account/${address}/nfts`,
    {
      headers: header,
    },
  )

  const nfts = resp.data.nfts

  const filtered = nfts.filter((nft: any) => nft.contract === contractAddress)

  res.status(200).json({ isHolder: filtered.length > 0 })
}

export default handler
