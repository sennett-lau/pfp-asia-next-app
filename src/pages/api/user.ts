import { connectDB } from '@/app/lib/mongodb'
import { getUserByDiscordId } from '@/app/lib/user'
import { IUser } from '@/types/user'
import dotenv from 'dotenv'
import type { NextApiRequest, NextApiResponse } from 'next'

dotenv.config()

type Res = {
  user?: IUser | null
  message?: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Res>) => {
  try {
    await connectDB()

    // get address from query
    const { discordUserId } = req.query

    const user = await getUserByDiscordId(discordUserId as string)

    res.status(200).json({ user })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error' })
  }
}

export default handler
