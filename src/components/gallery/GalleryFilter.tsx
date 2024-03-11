'use client'
import { IGalleryFilter } from '@/types'
import Image from 'next/image'

type Props = {
  filters: IGalleryFilter[]
  extendedIndices: number[]
  setExtendedIndices: (indices: number[]) => void
  selectedFilters: string[]
  setSelectedFilters: (filters: string[]) => void
  filterString: string
  setFilterString: (filter: string) => void
}

const GalleryFilter = (props: Props) => {
  const {
    filters,
    extendedIndices,
    setExtendedIndices,
    selectedFilters,
    setSelectedFilters,
    filterString,
    setFilterString,
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
    <div className='w-auto md:w-[280px] relative'>
      <div className='w-full flex flex-col sticky top-32 left-4'>
        <p className='text-primary-700 font-bold text-2xl mb-1'>FILTER</p>
        <div className='flex border-t-[1px] border-b-[1px] border-secondary-400 py-3 gap-2 items-center'>
          <Image
            src='/assets/common/search.png'
            alt='search'
            width={28}
            height={28}
          />
          <input
            type='text'
            placeholder='Search...'
            className='w-full bg-transparent focus:outline-none text-secondary-500 placeholder:text-secondary-400'
            value={filterString}
            onChange={(e) => setFilterString(e.target.value)}
          />
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
                    className='flex items-center cursor-pointer'
                    onClick={() => handleSelect(item.label)}
                  >
                    <Image
                      src={
                        selectedFilters.includes(item.label)
                          ? '/assets/common/checked.svg'
                          : '/assets/common/unchecked.svg'
                      }
                      alt='check'
                      width={28}
                      height={28}
                      className='mr-2'
                    />
                    {item.icon && (
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={28}
                        height={28}
                        className='mr-1'
                      />
                    )}
                    <p className='text-secondary-500'>
                      {item.label}
                      <span className='text-sm text-secondary-400'>
                        {` (${item.numDisplay})`}
                      </span>
                    </p>
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
