import { checkPFPAsiaHolder } from '@/app/lib/data'
import { connectDB } from '@/app/lib/mongodb'
import {
  getUserByDiscordId,
  grantNFTHolderRole,
  insertUser,
} from '@/app/lib/user'
import { DISCORD_API_URL } from '@/config/links'
import axios from 'axios'
import dotenv from 'dotenv'
import type { NextApiRequest, NextApiResponse } from 'next'

dotenv.config()

type Res = {
  message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Res>) => {
  try {
    await connectDB()

    const roleId = process.env.NFT_HOLDER_ROLE_ID
    const serverId = process.env.DISCORD_SERVER_ID

    // get address from query
    const { address, discordUserId } = req.query

    const isHolder = await checkPFPAsiaHolder(address as string)

    if (!isHolder) {
      res.status(200).json({ message: 'No NFTs found' })
      return
    }

    const user = await getUserByDiscordId(discordUserId as string)

    if (user) {
      if (user.address !== address) {
        res.status(200).json({ message: 'Address does not match' })
        return
      }
      if (user.roleNFTHolder) {
        res.status(200).json({ message: 'Role already granted' })
        return
      }
    }

    if (!user) {
      await insertUser(discordUserId as string, address as string)
    }

    await grantNFTHolderRole(discordUserId as string, address as string)

    const url = `${DISCORD_API_URL}/guilds/${serverId}/members/${discordUserId}/roles/${roleId}`

    const resp = await axios.put(
      url,
      {},
      { headers: { Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}` } },
    )

    if (resp.status !== 204) {
      res.status(500).json({ message: 'Error granting role' })
      return
    }

    res.status(200).json({ message: 'Done' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error' })
  }
}

export default handler
