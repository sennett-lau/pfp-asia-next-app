import { APIPfpAsiaResData } from '@/pages/api/pfp-asia-data'
import axios from 'axios'

export const nextApi = axios.create({
  baseURL: `/api/`,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getPFPAsiaNFTData = async () => {
  const data: APIPfpAsiaResData = (await nextApi.get('pfp-asia-data')).data

  return data
}
