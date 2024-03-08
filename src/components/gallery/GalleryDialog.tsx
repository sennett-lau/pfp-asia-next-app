import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

type Props = {
  isToggled: boolean
  setIsToggled: (isToggled: boolean) => void
  imageSrc: string
}

const GalleryDialog: React.FC<Props> = ({
  isToggled,
  setIsToggled,
  imageSrc,
}) => {
  return (
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

        {/* Centering the modal content */}
        <div className='fixed inset-0 flex items-center justify-center p-4'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Dialog.Panel className='mx-auto max-w-sm rounded bg-white dark:bg-gray-800 overflow-hidden'>
              <div>
                {/* Next.js Image component for optimized images. Remember to adjust layout or size as needed. */}
                <img
                  src={imageSrc}
                  alt='Gallery Image'
                  width={500}
                  height={500}
                />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default GalleryDialog
