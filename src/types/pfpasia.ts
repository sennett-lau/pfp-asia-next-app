export interface INFTRawData {
  name: string
  image: string
}

export type APIPfpAsiaResData = {
  nftData: INFTRawData[]
  isAll: boolean
}

export type APIPfpAsiaSwappableResData = {
  tokenIds: number[]
}

export enum FilterType {
  REVEALED = 'Revealed',
  BOXED = 'Boxed',
  CAN_BE_SWAP = 'Can be Swap',
}
