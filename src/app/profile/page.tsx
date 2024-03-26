'use client'

import { IUser } from '@/types/user'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import axios from 'axios'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { recoverMessageAddress } from 'viem'
import { useAccount, useSignMessage } from 'wagmi'

const Profile = () => {
  const session = useSession()
  const account = useAccount()
  const { signMessageAsync } = useSignMessage()

  const [discordUsername, setDiscordUsername] = useState('')
  const [discordAvatar, setDiscordAvatar] = useState('')
  const [discordUserId, setDiscordUserId] = useState('')

  const [walletAddress, setWalletAddress] = useState('')

  const [isHolder, setIsHolder] = useState(false)

  const [user, setUser] = useState<IUser | null>(null)

  const [isLoading, setIsLoading] = useState(true)

  // 0: not holder, 1: holder, 2: claimed, 3: Wallet Discord not matched
  const [claimRoleNFTHolderState, setClaimRoleNFTHolderState] = useState(0)

  const [claimingIndex, setClaimingIndex] = useState(0)

  useEffect(() => {
    mockLoading()
  })

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

      if (!isHolder && discordUserId) {
        updateIsHolder(account.address)
      }
    } else {
      setWalletAddress('')
    }
    if ((account && account.address) || discordUserId) {
      fetchUser()
    }
  }, [account, isHolder, discordUserId])

  const mockLoading = async () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const updateIsHolder = async (address: string) => {
    try {
      const res = await axios.get(`/api/pfp-asia/is-holder?address=${address}`)
      setIsHolder(res.data.isHolder)
    } catch (error) {
      console.log(error)
    }
  }

  const claimHolderRole = async () => {
    if (claimRoleNFTHolderState !== 1 || claimingIndex === 1) return

    try {
      setClaimingIndex(1)

      const sign = await handleAuth(walletAddress as `0x${string}`)
      if (!sign) {
        setClaimingIndex(0)
        return
      }

      const recovered = await recoverMessageAddress({
        message: 'LFG PFPAsia',
        signature: sign,
      })

      if (recovered !== walletAddress) {
        setClaimingIndex(0)
        return
      }

      const res = await axios.get(
        `/api/discord/roles/grant?address=${walletAddress}&discordUserId=${discordUserId}`,
      )
    } catch (error) {
      console.log(error)
    }

    setClaimingIndex(0)
  }

  const fetchUser = async () => {
    if (!discordUserId && !walletAddress) {
      return
    }
    try {
      const res = await axios.get(
        `/api/user?discordUserId=${discordUserId}&address=${walletAddress}`,
      )
      setUser(res.data.user)
    } catch (error: any) {
      // console.log(error)
      if (error.response?.data.message === 'User account does not match') {
        setClaimRoleNFTHolderState(3)
      }
    }
  }

  useEffect(() => {
    if (!walletAddress || !discordUserId) {
      setClaimRoleNFTHolderState(0)
      return
    }

    if (user?.address && user.address !== walletAddress) {
      setClaimRoleNFTHolderState(3)
      return
    }
    if (!isHolder) {
      setClaimRoleNFTHolderState(0)
      return
    }
    if (user?.roleNFTHolder) {
      setClaimRoleNFTHolderState(2)
      return
    }

    setClaimRoleNFTHolderState(1)
  }, [isHolder, discordUserId, user, walletAddress])

  const getClaimNFTHolderButtonText = () => {
    if (claimingIndex === 1) {
      return 'Claiming...'
    }

    if (claimRoleNFTHolderState === 0) {
      return 'Claim REDT1 Holder Role'
    }
    if (claimRoleNFTHolderState === 1) {
      return 'Claim REDT1 Holder Role'
    }
    if (claimRoleNFTHolderState === 2) {
      return 'Claimed REDT1 Holder Role'
    }
    if (claimRoleNFTHolderState === 3) {
      return 'Wallet Discord not matched'
    }
  }

  const handleAuth = async (address: `0x${string}`) => {
    try {
      const signature = await signMessageAsync({
        account: address,
        message: 'LFG PFPAsia',
      })
      console.log('signature', signature)

      return signature
    } catch (error) {
      console.log(error)
    }
    return null
  }

  return (
    <div className='max-w-11xl mx-auto w-full px-4 flex md:pb-0 justify-center'>
      {isLoading ? (
        <div className='flex bg-white rounded-lg shadow-lg px-4 py-8 w-full md:w-1/2 h-[40vh] justify-center items-center'>
          <Image
            src='/assets/common/loading.svg'
            alt='Loading'
            width={150}
            height={150}
          />
        </div>
      ) : (
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
          <div className='flex flex-col w-full border-t-2 border-secondary-400 mt-4 pt-8'>
            <button onClick={claimHolderRole}>
              <div
                className={`flex items-center justify-center w-full h-20 text-white rounded-lg hover:scale-105 transform transition-all duration-300 ${claimRoleNFTHolderState !== 1 || claimingIndex === 1 ? 'bg-gray-400' : 'bg-discord-500'}`}
              >
                {getClaimNFTHolderButtonText()}
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
