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
  SWAPPABLE = 'Swappable',
  DRAGON_BALL = 'Dragon Ball',
}
