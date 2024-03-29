'use client'

import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { WagmiProvider } from 'wagmi'
import { mainnet } from 'wagmi/chains'

const config = getDefaultConfig({
  appName: 'PFPAsia',
  projectId: '42ce92d52845824ac2f2f05bbb5b1b53',
  chains: [mainnet],
})

type Props = {
  children: React.ReactNode
}

const queryClient = new QueryClient()

const Providers = (props: Props) => {
  const { children } = props

  return (
    <WagmiProvider config={config}>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>{children}</RainbowKitProvider>
        </QueryClientProvider>
      </SessionProvider>
    </WagmiProvider>
  )
}

export default Providers
