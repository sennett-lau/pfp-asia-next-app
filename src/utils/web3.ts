import { InfuraProvider, InfuraWebSocketProvider } from "ethers"

export const getProvider = async (key: string, chainId: number) => {
  return new InfuraWebSocketProvider(chainId, key)
}
