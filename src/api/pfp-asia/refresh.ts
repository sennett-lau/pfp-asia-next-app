import { connectDB } from '@/app/lib/mongodb'
import {
  deletePFPAsiaNFTDataService,
  insertPFPAsiaNFTDataService,
} from '@/app/lib/pfpasia'
import { PFPASIA_DATA_URL, PFPASIA_REDT1_TOTAL_SUPPLY } from '@/config/pfpasia'
import { INFTRawData } from '@/types'
import axios from 'axios'
import dotenv from 'dotenv'
import type { NextApiRequest, NextApiResponse } from 'next'

dotenv.config()

type Res = {
  message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Res>) => {
  await connectDB()
  let existingData: INFTRawData[] = []

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

        start += batch
      }

      await deletePFPAsiaNFTDataService()
      await insertPFPAsiaNFTDataService(existingData)
    } catch (error) {
      console.log(`error fetching data`)
    }
  }

  res.status(200).json({ message: 'success' })
}

export default handler
