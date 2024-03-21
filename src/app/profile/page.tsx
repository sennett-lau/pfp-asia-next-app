'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

const Profile = () => {
  const session = useSession()
  const account = useAccount()

  const [discordUsername, setDiscordUsername] = useState('')
  const [discordAvatar, setDiscordAvatar] = useState('')

  const [walletAddress, setWalletAddress] = useState('')

  useEffect(() => {
    if (session.data?.user?.name && session.data?.user?.image) {
      setDiscordUsername(session.data.user.name)
      setDiscordAvatar(session.data.user.image)
    } else {
      setDiscordUsername('')
      setDiscordAvatar('')
    }
  }, [session])

  useEffect(() => {
    if (account && account.address) {
      setWalletAddress(account.address)
    } else {
      setWalletAddress('')
    }
  }, [account])

  const claimHolderRole = async () => {}

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
            <p className='text-2xl text-secondary-500 text-center my-4'>
              Actions List
            </p>

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
