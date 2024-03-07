import { OPENSEA_API_URL, PFPASIA_CONTRACT_ADDRESS } from '@/config/links'
import { PFPASIA_REDT1_TOTAL_SUPPLY } from '@/config/pfpasia'
import axios from 'axios'
import dotenv from 'dotenv'
import type { NextApiRequest, NextApiResponse } from 'next'

dotenv.config()

export type APIPfpAsiaSwappableResData = {
  tokenIds: number[]
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<APIPfpAsiaSwappableResData>,
) => {
  const chain = 'ethereum'
  const contractAddress = PFPASIA_CONTRACT_ADDRESS
  const key = process.env.OPENSEA_API_KEY

  const header = {
    accept: 'application/json',
    'x-api-key': process.env.OPENSEA_API_KEY,
  }
  const resp = await axios.get(
    `${OPENSEA_API_URL}/chain/${chain}/contract/${contractAddress}/nfts`,
    {
      headers: header,
    },
  )

  const nfts = resp.data.nfts

  const filtered = nfts.filter(
    (nft: any) =>
      nft.contract === contractAddress &&
      parseInt(
        nft.opensea_url.split('/')[nft.opensea_url.split('/').length - 1],
      ) <= PFPASIA_REDT1_TOTAL_SUPPLY,
  )

  const tokenIds = filtered.map((nft: any) =>
    parseInt(nft.opensea_url.split('/')[nft.opensea_url.split('/').length - 1]),
  )

  return res.status(200).json({ tokenIds })
}

export default handler
