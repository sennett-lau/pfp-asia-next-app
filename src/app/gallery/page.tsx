'use server'
import GalleryContainer from '@/components/gallery/GalleryContainer'
import { FilterType, IGalleryFilter } from '@/types'
import { formatData } from '@/utils/nft'
import { getPFPAsiaNFTData, getPFPAsiaSwappable } from '../lib/data'

const filters: IGalleryFilter[] = [
  {
    title: 'Status',
    icon: '/assets/common/status.svg',
    list: [
      {
        label: FilterType.REVEALED,
        numDisplay: 'Loading...',
      },
      {
        label: FilterType.BOXED,
        numDisplay: 'Loading...',
      },
      {
        label: FilterType.CAN_BE_SWAP,
        numDisplay: 'Loading...',
      },
    ],
  },
]

const Gallery = async () => {
  const data = await getPFPAsiaNFTData()
  const nftData = data.nftData.map((d) => formatData(d))
  const swappableTokenIds = await getPFPAsiaSwappable()

  return (
    <GalleryContainer
      nftData={nftData}
      swappableTokenIds={swappableTokenIds}
      filters={filters}
    />
  )
}

export default Gallery
