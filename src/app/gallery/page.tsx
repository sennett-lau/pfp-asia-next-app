'use client'
import GalleryFilter from '@/components/gallery/GalleryFilter'
import GalleryItems from '@/components/gallery/GalleryItems'
import { useState } from 'react'

export interface IGalleryFilter {
  title: string
  icon: string
  list: string[]
}

const filters: IGalleryFilter[] = [
  {
    title: 'Status',
    icon: '/assets/common/status.svg',
    list: ['Revealed', 'Boxed'],
  },
]

const Gallery = () => {
  const [extendedIndices, setExtendedIndices] = useState<number[]>([])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  return (
    <div className='max-w-11xl mx-auto w-full px-4 flex-1 flex pt-[128px]'>
      <GalleryFilter
        filters={filters}
        extendedIndices={extendedIndices}
        setExtendedIndices={setExtendedIndices}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <GalleryItems />
    </div>
  )
}

export default Gallery
