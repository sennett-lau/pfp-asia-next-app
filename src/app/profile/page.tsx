'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import axios from 'axios'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

const Profile = () => {
  const session = useSession()
  const account = useAccount()

  const [discordUsername, setDiscordUsername] = useState('')
  const [discordAvatar, setDiscordAvatar] = useState('')
  const [discordUserId, setDiscordUserId] = useState('')

  const [walletAddress, setWalletAddress] = useState('')

  const [isHolder, setIsHolder] = useState(false)

  useEffect(() => {
    const s = session as typeof session & { data: { userId: string } }
    if (s.data?.user?.name && s.data?.user?.image && s.data?.userId) {
      setDiscordUsername(s.data.user.name)
      setDiscordAvatar(s.data.user.image)
      setDiscordUserId(s.data.userId)
    } else {
      setDiscordUsername('')
      setDiscordAvatar('')
    }
  }, [session])

  useEffect(() => {
    if (account && account.address) {
      setWalletAddress(account.address)

      updateIsHolder(account.address)
    } else {
      setWalletAddress('')
    }
  }, [account])

  const updateIsHolder = async (address: string) => {
    try {
      const res = await axios.get(`/api/pfp-asia/is-holder?address=${address}`)
      setIsHolder(res.data.isHolder)
    } catch (error) {
      console.log(error)
    }
  }

  const claimHolderRole = async () => {
    try {
      const res = await axios.get(
        `/api/discord/roles/grant?address=${walletAddress}&discordUserId=${discordUserId}`,
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='max-w-11xl mx-auto w-full px-4 flex md:pb-0 justify-center'>
      <div className='flex flex-col gap-4 bg-white rounded-lg shadow-lg px-4 py-8 w-full md:w-1/2'>
        <div className='custom-connect-button'>
          <ConnectButton showBalance={false} />
        </div>
        {discordUsername && discordAvatar ? (
          <button onClick={() => signOut()}>
            <div className='flex items-center justify-center w-full h-20 bg-discord-500 text-white rounded-lg hover:scale-105 transform transition-all duration-300'>
              Connected as {discordUsername}
              <img
                src={discordAvatar}
                alt='Discord'
                className='ml-2 w-8 h-8 rounded-full'
              />
            </div>
          </button>
        ) : (
          <button onClick={() => signIn('discord')}>
            <div className='flex items-center justify-center w-full h-20 bg-discord-500 text-white rounded-lg hover:scale-105 transform transition-all duration-300'>
              Connect Discord
              <Image
                src='/assets/icons/discord-white.svg'
                alt='Discord'
                width={20}
                height={20}
                className='ml-2'
              />
            </div>
          </button>
        )}
        {walletAddress && discordUsername && discordAvatar && (
          <div className='flex flex-col w-full border-t-2 border-secondary-400 mt-4'>
            <button onClick={claimHolderRole}>
              <div className='flex items-center justify-center w-full h-20 bg-discord-500 text-white rounded-lg hover:scale-105 transform transition-all duration-300'>
                Claim REDT1 Holder Role
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
