'use client'
import { IGalleryFilter } from '@/app/gallery/page'
import Image from 'next/image'

type Props = {
  filters: IGalleryFilter[]
  extendedIndices: number[]
  setExtendedIndices: (indices: number[]) => void
  selectedFilters: string[]
  setSelectedFilters: (filters: string[]) => void
}

const GalleryFilter = (props: Props) => {
  const {
    filters,
    extendedIndices,
    setExtendedIndices,
    selectedFilters,
    setSelectedFilters,
  } = props

  const handleExtend = (index: number) => {
    if (extendedIndices.includes(index)) {
      setExtendedIndices(extendedIndices.filter((i) => i !== index))
    } else {
      setExtendedIndices([...extendedIndices, index])
    }
  }

  const handleSelect = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter))
    } else {
      setSelectedFilters([...selectedFilters, filter])
    }
  }

  return (
    <div className='w-[280px] relative'>
      <div className='w-full flex flex-col sticky top-32 left-4'>
        <p className='text-primary-700 font-bold text-2xl mb-1'>FILTER</p>
        <div className='flex border-t-[1px] border-b-[1px] border-secondary-400 py-3 gap-2 items-center'>
          <Image
            src='/assets/common/search.png'
            alt='search'
            width={28}
            height={28}
          />
          <p className='text-secondary-400'>Search...</p>
        </div>
        <div className='flex flex-col py-3 gap-3'>
          {filters.map((filter, i) => (
            <div key={i} className='flex flex-col gap-2'>
              <div
                className='flex justify-between items-center cursor-pointer'
                onClick={() => handleExtend(i)}
              >
                <div className='flex gap-2 items-center'>
                  <Image
                    src={filter.icon}
                    alt='status'
                    width={28}
                    height={28}
                  />
                  <p className='text-secondary-500'>{filter.title}</p>
                </div>
                <Image
                  src='/assets/common/add.svg'
                  alt='add'
                  width={20}
                  height={20}
                />
              </div>
              <div
                className={`flex flex-col pl-2 ${extendedIndices.includes(i) ? 'max-h-[1000px]' : 'max-h-0'} transition-all duration-300 overflow-hidden`}
              >
                {filter.list.map((item, ii) => (
                  <div
                    key={ii}
                    className='flex items-center gap-2 cursor-pointer'
                    onClick={() => handleSelect(item)}
                  >
                    <Image
                      src={
                        selectedFilters.includes(item)
                          ? '/assets/common/checked.svg'
                          : '/assets/common/unchecked.svg'
                      }
                      alt='check'
                      width={28}
                      height={28}
                    />
                    <p className='text-secondary-500'>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryFilter
