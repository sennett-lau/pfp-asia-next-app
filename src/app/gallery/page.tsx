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
  list: { label: string; numDisplay: string }[]
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

const Gallery = () => {
  const [extendedIndices, setExtendedIndices] = useState<number[]>([])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const [fetchedAdd, setFetchedAdd] = useState<boolean>(false)
  const [allData, setAllData] = useState<INFTData[]>([])
  const [filteredMap, setFilteredMap] = useState<Map<string, INFTData[]>>(
    new Map(),
  )
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
    } else {
      setFetchedAdd(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (allData.length === 0) return

    const m = new Map<string, INFTData[]>()

    // for Revealed
    const revealed = allData.filter((d) => !d.imageUrl.includes('ipfs'))
    m.set(FilterType.REVEALED, revealed)

    // for Boxed
    const boxed = allData.filter((d) => d.imageUrl.includes('ipfs'))
    m.set(FilterType.BOXED, boxed)

    // for Can be Swap
    // TODO: get contract holding data

    setFilteredMap(m)
  }, [allData])

  useEffect(() => {
    if (allData.length === 0) return

    if (selectedFilters.length === 0) {
      setFilteredData(allData)
      return
    }

    let f: INFTData[] = []

    if (selectedFilters.includes(FilterType.REVEALED)) {
      f = [...f, ...(filteredMap.get(FilterType.REVEALED) || [])]
    }

    if (selectedFilters.includes(FilterType.BOXED)) {
      f = [...f, ...(filteredMap.get(FilterType.BOXED) || [])]
    }

    if (selectedFilters.includes(FilterType.CAN_BE_SWAP)) {
      f = [...f, ...(filteredMap.get(FilterType.CAN_BE_SWAP) || [])]
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
  }, [selectedFilters, allData, filteredMap])

  // infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return

      setShowingIndex((prev) => prev + 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const updateFilterLength = (filters: IGalleryFilter[]) => {
    if (!fetchedAdd) return filters

    const f = filters

    for (let i = 0; i < f.length; i++) {
      const filter = f[i]

      if (filter.title === 'Status') {
        filter.list = filter.list.map((l) => {
          if (l.label === FilterType.REVEALED) {
            l.numDisplay = (
              filteredMap.get(FilterType.REVEALED) || []
            ).length.toString()
          } else if (l.label === FilterType.BOXED) {
            l.numDisplay = (
              filteredMap.get(FilterType.BOXED) || []
            ).length.toString()
          } else if (l.label === FilterType.CAN_BE_SWAP) {
            l.numDisplay = (
              filteredMap.get(FilterType.CAN_BE_SWAP) || []
            ).length.toString()
          }

          return l
        })
      }
    }

    return f
  }

  return (
    <div className='max-w-11xl mx-auto w-full px-4 flex-1 flex pt-[128px]'>
      <GalleryFilter
        filters={updateFilterLength(filters)}
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
