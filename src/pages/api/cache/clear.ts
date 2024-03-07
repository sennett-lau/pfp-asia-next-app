import { localCacheClear } from '@/utils/localCache'
import type { NextApiRequest, NextApiResponse } from 'next'

type APIPfpAsiaResData = {
  message: string
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<APIPfpAsiaResData>,
) => {
  localCacheClear()

  return res.status(200).json({ message: 'Cache cleared' })
}

export default handler
