'use client'
import GalleryFilter from '@/components/gallery/GalleryFilter'
import GalleryFilterButton from '@/components/gallery/GalleryFilterButton'
import GalleryItems from '@/components/gallery/GalleryItems'
import { FilterType, IGalleryFilter, INFTData } from '@/types'
import { useEffect, useState } from 'react'
import GalleryToTopButton from './GalleryToTopButton'

type Props = {
  filters: IGalleryFilter[]
  nftData: INFTData[]
  swappableTokenIds: number[]
}

// ==============================
// Hardcoded token data
// ==============================
const dragonBallTokenIds = [
  1955, 3874, 3888, 3903, 3910, 3918, 3927, 3941, 3956, 3963,
]
// ==============================

const GalleryContainer = (props: Props) => {
  const { filters, nftData, swappableTokenIds } = props

  const [extendedIndices, setExtendedIndices] = useState<number[]>([])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const [filteredMap, setFilteredMap] = useState<Map<string, INFTData[]>>(
    new Map(),
  )
  const [filteredData, setFilteredData] = useState<INFTData[]>([])
  const [showingIndex, setShowingIndex] = useState<number>(20)

  const [filterString, setFilterString] = useState<string>('')

  useEffect(() => {
    if (nftData.length === 0) return

    const m = new Map<string, INFTData[]>()

    // for Revealed
    const revealed = nftData.filter((d) => !d.imageUrl.includes('ipfs'))
    m.set(FilterType.REVEALED, revealed)

    // for Boxed
    const boxed = nftData.filter((d) => d.imageUrl.includes('ipfs'))
    m.set(FilterType.BOXED, boxed)

    // for swappable
    const canBeSwap = nftData.filter((d) =>
      swappableTokenIds.includes(parseInt(d.name.split(' ')[1])),
    )
    m.set(FilterType.SWAPPABLE, canBeSwap)

    const dragonBall = nftData.filter((d) =>
      dragonBallTokenIds.includes(parseInt(d.name.split(' ')[1])),
    )
    m.set(FilterType.DRAGON_BALL, dragonBall)

    setFilteredMap(m)
  }, [])

  useEffect(() => {
    if (nftData.length === 0) return

    let f: INFTData[] = []

    if (selectedFilters.length === 0) {
      f = nftData
      if (filterString) {
        f = f.filter((d) =>
          d.name.toLowerCase().includes(filterString.toLowerCase()),
        )
      }
      setFilteredData(f)
      return
    }

    if (selectedFilters.includes(FilterType.REVEALED)) {
      f = [...f, ...(filteredMap.get(FilterType.REVEALED) || [])]
    }

    if (selectedFilters.includes(FilterType.BOXED)) {
      f = [...f, ...(filteredMap.get(FilterType.BOXED) || [])]
    }

    if (selectedFilters.includes(FilterType.SWAPPABLE)) {
      f = [...f, ...(filteredMap.get(FilterType.SWAPPABLE) || [])]
    }

    if (selectedFilters.includes(FilterType.DRAGON_BALL)) {
      f = [...f, ...(filteredMap.get(FilterType.DRAGON_BALL) || [])]
    }

    if (filterString) {
      console.log('filterString: ', filterString)
      f = f.filter((d) =>
        d.name.toLowerCase().includes(filterString.toLowerCase()),
      )
      console.log('filtered: ', f.length)
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

    // remove duplicates
    f = f.filter((d, i) => {
      const index = f.findIndex((f) => f.name === d.name)
      return index === i
    })

    setFilteredData(f)
  }, [selectedFilters, nftData, filteredMap, swappableTokenIds, filterString])

  // infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight - 300
      )
        return

      setShowingIndex((prev) => prev + 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const updateFilterLength = (filters: IGalleryFilter[]) => {
    const f = filters

    for (let i = 0; i < f.length; i++) {
      const filter = f[i]

      filter.list = filter.list.map((l) => {
        if (l.label === FilterType.REVEALED) {
          l.numDisplay = (
            filteredMap.get(FilterType.REVEALED) || []
          ).length.toString()
        } else if (l.label === FilterType.BOXED) {
          l.numDisplay = (
            filteredMap.get(FilterType.BOXED) || []
          ).length.toString()
        } else if (l.label === FilterType.SWAPPABLE) {
          l.numDisplay = (
            filteredMap.get(FilterType.SWAPPABLE) || []
          ).length.toString()
        } else if (l.label === FilterType.DRAGON_BALL) {
          l.numDisplay = dragonBallTokenIds.length.toString()
        }

        return l
      })
    }

    return f
  }

  return (
    <div className='max-w-11xl mx-auto w-full px-4 flex-1 flex pt-24 md:pt-[128px]'>
      <div className='w-[280px] hidden md:block'>
        <GalleryFilter
          filters={updateFilterLength(filters)}
          extendedIndices={extendedIndices}
          setExtendedIndices={setExtendedIndices}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          filterString={filterString}
          setFilterString={setFilterString}
        />
      </div>
      <GalleryItems
        data={filteredData.slice(0, showingIndex)}
        swappable={swappableTokenIds}
      />
      <GalleryFilterButton
        filters={updateFilterLength(filters)}
        extendedIndices={extendedIndices}
        setExtendedIndices={setExtendedIndices}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        filterString={filterString}
        setFilterString={setFilterString}
      />
      <GalleryToTopButton />
    </div>
  )
}

export default GalleryContainer
