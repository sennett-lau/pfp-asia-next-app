import { MORALIS_API_URL, OPENSEA_API_URL } from '@/config/links'
import {
  PFPASIA_CONTRACT_ADDRESS,
  PFPASIA_REDT1_TOTAL_SUPPLY,
} from '@/config/pfpasia'
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
  const contractAddress = PFPASIA_CONTRACT_ADDRESS

  const header = {
    accept: 'application/json',
    'x-api-key': process.env.MORALIS_API_KEY,
  }
  const resp = await axios.get(`${MORALIS_API_URL}/${contractAddress}/nft`, {
    headers: header,
  })

  const nfts = resp.data.result

  const filtered = nfts.filter(
    (nft: any) =>
      nft.token_address === contractAddress &&
      parseInt(nft.token_id) <= PFPASIA_REDT1_TOTAL_SUPPLY,
  )

  return filtered.map((nft: any) =>
    parseInt(nft.opensea_url.split('/')[nft.opensea_url.split('/').length - 1]),
  )
}

export const checkPFPAsiaHolder = async (address: string): Promise<boolean> => {
  const contractAddress = PFPASIA_CONTRACT_ADDRESS

  const header = {
    accept: 'application/json',
    'x-api-key': process.env.MORALIS_API_KEY,
  }
  let resp = await axios.get(`${MORALIS_API_URL}/${address}/nft`, {
    headers: header,
  })

  const nfts = resp.data.result

  const filtered = nfts.filter(
    (nft: any) => nft.token_address === contractAddress,
  )

  return filtered.length > 0
}
