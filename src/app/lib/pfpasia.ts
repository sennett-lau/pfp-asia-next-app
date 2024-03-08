import { INFTRawData } from '@/types'
import { PFPAsiaDB, connectDB } from './mongodb'

export const getPFPAsiaNFTDataService = async (): Promise<INFTRawData[]> => {
  await connectDB()

  const collection = PFPAsiaDB.collection('PFPAsiaNFTData')

  const data = await collection.find({}).toArray()

  return data as any as INFTRawData[]
}

export const insertPFPAsiaNFTDataService = async (data: INFTRawData[]) => {
  await connectDB()

  const collection = PFPAsiaDB.collection('PFPAsiaNFTData')

  await collection.insertMany(data)
}

export const deletePFPAsiaNFTDataService = async () => {
  const collection = PFPAsiaDB.collection('PFPAsiaNFTData')

  await collection.deleteMany({})
}
