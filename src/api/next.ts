import { APIPfpAsiaResData } from '@/pages/api/pfp-asia/nfts'
import { APIPfpAsiaSwappableResData } from '@/pages/api/pfp-asia/swappable'
import axios from 'axios'

export const nextApi = axios.create({
  baseURL: `/api/`,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getPFPAsiaNFTData = async (): Promise<APIPfpAsiaResData> => {
  const data: APIPfpAsiaResData = (await nextApi.get('/pfp-asia/nfts')).data

  return data
}

export const getPFPAsiaSwappable = async (): Promise<number[]> => {
  const data: APIPfpAsiaSwappableResData = (
    await nextApi.get('/pfp-asia/swappable')
  ).data

  return data.tokenIds
}
