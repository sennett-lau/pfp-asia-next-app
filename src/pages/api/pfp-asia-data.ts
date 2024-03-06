import { PFPASIA_DATA_URL, PFPASIA_REDT1_TOTAL_SUPPLY } from '@/config/pfpasia'
import { localCacheGet, localCacheSet } from '@/utils/localCache'
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type APIPfpAsiaResData = {
  nftData: {
    name: string
    image: string
  }[]
  isAll: boolean
}

const loadAllData = async () => {
  let existingData = (await localCacheGet(
    'pfp-asia-nft-data',
  )) as any as APIPfpAsiaResData['nftData']

  while (existingData.length < PFPASIA_REDT1_TOTAL_SUPPLY) {
    try {
      let start = existingData.length + 1
      const batch = 500
      const end = PFPASIA_REDT1_TOTAL_SUPPLY

      while (start <= end) {
        const promises = []
        const endBatch = start + batch - 1 > end ? end : start + batch - 1

        console.log(`start: ${start}, end: ${endBatch}`)

        for (let i = start; i <= endBatch; i++) {
          promises.push(axios.get(`${PFPASIA_DATA_URL}/${i}`))
        }

        const batchData = await Promise.all(promises)

        const batchDataJson = batchData.map((d) => d.data)

        existingData = [...existingData, ...batchDataJson]

        localCacheSet('pfp-asia-nft-data', existingData)

        start += batch
      }
    } catch (error) {
      console.log('error', error)
    }
  }
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<APIPfpAsiaResData>,
) => {
  // return all data if it's in cache
  const cacheData = (await localCacheGet(
    'pfp-asia-nft-data',
  )) as any as APIPfpAsiaResData['nftData']

  if (cacheData) {
    return res.status(200).json({
      nftData: cacheData,
      isAll: cacheData.length === PFPASIA_REDT1_TOTAL_SUPPLY,
    })
  }

  // get first 20 data for response
  const promises = []

  for (let i = 1; i < 21; i++) {
    promises.push(axios.get(`${PFPASIA_DATA_URL}/${i}`))
  }

  const data = await Promise.all(promises)

  const json = data.map((d) => d.data)

  res.status(200).json({
    nftData: json,
    isAll: false,
  })

  localCacheSet('pfp-asia-nft-data', json)

  //continue to fetch all data and store in cache
  loadAllData()
}

export default handler
