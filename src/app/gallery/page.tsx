'use client'
import { getPFPAsiaNFTData } from '@/api/next'
import GalleryFilter from '@/components/gallery/GalleryFilter'
import GalleryItems, { INFTData } from '@/components/gallery/GalleryItems'
import { formatData } from '@/utils/nft'
import { sleep } from '@/utils/time'
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

  const [allData, setAllData] = useState<INFTData[]>([])
  const [filteredData, setFilteredData] = useState<INFTData[]>([])
  const [showingIndex, setShowingIndex] = useState<number>(20)

  const fetchData = async () => {
    const data = await getPFPAsiaNFTData()
    const formattedData = data.nftData.map((d) => formatData(d))

    console.log('----------------------------------------------')
    console.log('formattedData: ', formattedData.length)
    console.log('isAll: ', data.isAll)
    console.log('data sample: ', formattedData[0])
    console.log('----------------------------------------------')

    setAllData(formattedData)

    if (!data.isAll) {
      await sleep(5000)

      fetchData()
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (allData.length === 0) return

    if (selectedFilters.length === 0) {
      setFilteredData(allData)
      return
    }

    let f: INFTData[] = []

    if (selectedFilters.includes(FilterType.REVEALED)) {
      const tmp = allData.filter((d) => !d.imageUrl.includes('ipfs'))

      f = [...f, ...tmp]
    }

    if (selectedFilters.includes(FilterType.BOXED)) {
      const tmp = allData.filter((d) => d.imageUrl.includes('ipfs'))

      f = [...f, ...tmp]
    }

    if (selectedFilters.includes(FilterType.CAN_BE_SWAP)) {
      // TODO: get contract holding data
    }

    // sort by name in ascending order
    f = f.sort((a, b) => {
      const aN = parseInt(a.name.split(' ')[1])
      const bN = parseInt(b.name.split(' ')[1])
      if (aN < bN) {
        return -1
      }
      if (aN > bN) {
        return 1
      }
      return 0
    })

    setFilteredData(f)
  }, [selectedFilters, allData])

  return (
    <div className='max-w-11xl mx-auto w-full px-4 flex-1 flex pt-[128px]'>
      <GalleryFilter
        filters={filters}
        extendedIndices={extendedIndices}
        setExtendedIndices={setExtendedIndices}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <GalleryItems data={filteredData.slice(0, showingIndex)} />
    </div>
  )
}

export default Gallery
