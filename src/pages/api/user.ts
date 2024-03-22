import { connectDB } from '@/app/lib/mongodb'
import { getUserByDiscordId } from '@/app/lib/user'
import { IUser } from '@/types/user'
import dotenv from 'dotenv'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getUserByAddress } from '../../app/lib/user'

dotenv.config()

type Res = {
  user?: IUser | null
  message?: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Res>) => {
  try {
    await connectDB()

    // get address from query
    const { discordUserId, address } = req.query

    let user: IUser | null = null

    if (discordUserId) {
      user = await getUserByDiscordId(discordUserId as string)

      if (user && user.address !== address) {
        res.status(400).json({ message: 'User account does not match' })
      }
    }

    if (!user && address) {
      user = await getUserByAddress(address as string)

      if (user && user.discordId !== discordUserId) {
        res.status(400).json({ message: 'User account does not match' })
      }
    }

    res.status(200).json({ user })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error' })
  }
}

export default handler
