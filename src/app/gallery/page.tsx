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
        label: FilterType.SWAPPABLE,
        numDisplay: 'Loading...',
      },
    ],
  },
  {
    title: 'Collections',
    icon: '/assets/common/collections.svg',
    list: [
      {
        label: FilterType.DRAGON_BALL,
        numDisplay: 'Loading...',
        icon: '/assets/common/dragon-ball.svg',
      },
    ],
  },
]

type GalleryProps = {
  params: {}
  searchParams: { [key: string]: string | string[] | undefined }
}

const Gallery = async (props: GalleryProps) => {
  const searchParams = props.searchParams

  const data = await getPFPAsiaNFTData(searchParams.all === 'true')
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
