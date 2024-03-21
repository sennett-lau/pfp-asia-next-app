import { checkPFPAsiaHolder } from '@/app/lib/data'
import { connectDB } from '@/app/lib/mongodb'
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

  const isHolder = await checkPFPAsiaHolder(address as string)

  res.status(200).json({ isHolder })
}

export default handler
