import { OPENSEA_API_URL, PFPASIA_CONTRACT_ADDRESS } from '@/config/links'
import { PFPASIA_REDT1_TOTAL_SUPPLY } from '@/config/pfpasia'
import { APIPfpAsiaResData } from '@/types'
import axios from 'axios'
import { getPFPAsiaNFTDataService } from './pfpasia'

export const getPFPAsiaNFTData = async (
  isAll?: boolean,
): Promise<APIPfpAsiaResData> => {
  const data = await getPFPAsiaNFTDataService()

  if (!isAll) {
    const header = {
      accept: 'application/json',
      'x-api-key': process.env.OPENSEA_API_KEY,
    }
    const resp = await axios.get(`${OPENSEA_API_URL}/collections/pfpasia`, {
      headers: header,
    })

    const total_supply = resp.data.total_supply

    const filtered = data.filter((nft) => {
      const id = parseInt(nft.name.split(' #')[nft.name.split(' #').length - 1])

      return id <= total_supply
    })

    return {
      nftData: filtered,
      isAll: true,
    }
  }

  return {
    nftData: data,
    isAll: true,
  }
}

export const getPFPAsiaSwappable = async (): Promise<number[]> => {
  const chain = 'ethereum'
  const contractAddress = PFPASIA_CONTRACT_ADDRESS

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

  return filtered.map((nft: any) =>
    parseInt(nft.opensea_url.split('/')[nft.opensea_url.split('/').length - 1]),
  )
}
