import { PFPAsiaDB } from './mongodb'

export const getUserByDiscordId = async (discordId: string) => {
  const collection = PFPAsiaDB.collection('User')

  const user = await collection.findOne({ discordId })

  if (!user) {
    return null
  }

  const { _id, ...rest } = user

  return rest
}

export const insertUser = async (discordId: string, address: string) => {
  const collection = PFPAsiaDB.collection('User')

  await collection.insertOne({
    discordId,
    address,
  })

  return true
}

export const grantNFTHolderRole = async (
  discordId: string,
  address: string,
) => {
  const collection = PFPAsiaDB.collection('User')

  await collection.findOneAndUpdate(
    {
      discordId,
      address,
    },
    {
      $set: {
        roleNFTHolder: true,
      },
    },
    {
      upsert: false,
      returnDocument: 'after',
    },
  )
}
