'use client'

import { IGalleryFilter } from '@/types'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import GalleryFilter from './GalleryFilter'

type FilterButtonProps = {
  filters: IGalleryFilter[]
  extendedIndices: number[]
  setExtendedIndices: (indices: number[]) => void
  selectedFilters: string[]
  setSelectedFilters: (filters: string[]) => void
  filterString: string
  setFilterString: (filter: string) => void
}

const GalleryFilterButton: React.FC<FilterButtonProps> = ({
  filters,
  extendedIndices,
  setExtendedIndices,
  selectedFilters,
  setSelectedFilters,
  filterString,
  setFilterString,
}) => {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <>
      <button
        className='flex md:hidden items-center justify-center w-12 h-12 rounded-full bg-light-500/40 shadow-md fixed bottom-4 left-1/2 transform -translate-x-1/2'
        onClick={() => setIsToggled(true)}
      >
        <Image
          src='/assets/common/filter.svg'
          alt='filter'
          width={24}
          height={24}
        />
      </button>

      <Transition appear show={isToggled} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-50'
          onClose={() => setIsToggled(false)}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <GalleryFilter
                    filters={filters}
                    extendedIndices={extendedIndices}
                    setExtendedIndices={setExtendedIndices}
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                    filterString={filterString}
                    setFilterString={setFilterString}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default GalleryFilterButton
