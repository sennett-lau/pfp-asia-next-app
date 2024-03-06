'use client'
import GalleryFilter from '@/components/gallery/GalleryFilter'
import GalleryItems, { INFTData } from '@/components/gallery/GalleryItems'
import { PFPASIA_DATA_URL } from '@/config/pfpasia'
import { formatData } from '@/utils/nft'
import { useEffect, useState } from 'react'

export interface IGalleryFilter {
  title: string
  icon: string
  list: string[]
}

enum FilterType {
  REVEALED = 'Revealed',
  BOXED = 'Boxed',
  CAN_BE_SWAP = 'Can be Swap',
}

const filters: IGalleryFilter[] = [
  {
    title: 'Status',
    icon: '/assets/common/status.svg',
    list: [FilterType.REVEALED, FilterType.BOXED, FilterType.CAN_BE_SWAP],
  },
]

const Gallery = () => {
  const [extendedIndices, setExtendedIndices] = useState<number[]>([])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const [initialData, setInitialData] = useState<INFTData[]>([])

  const fetchInitialData = async () => {
    const promises = []

    for (let i = 1; i < 21; i++) {
      promises.push(fetch(`${PFPASIA_DATA_URL}/${i}`))
    }

    const responses = await Promise.all(promises)

    const jsons = await Promise.all(
      responses.map((response) => response.json()),
    )

    const data = jsons.map((json) => formatData(json))

    setInitialData(data)
  }

  useEffect(() => {
    fetchInitialData()
  }, [])

  return (
    <div className='max-w-11xl mx-auto w-full px-4 flex-1 flex pt-[128px]'>
      <GalleryFilter
        filters={filters}
        extendedIndices={extendedIndices}
        setExtendedIndices={setExtendedIndices}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <GalleryItems data={initialData} />
    </div>
  )
}

export default Gallery
