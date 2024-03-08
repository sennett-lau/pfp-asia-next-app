import { INFTData } from '@/types'
import Image from 'next/image'
import { useState } from 'react'
import GalleryDialog from './GalleryDialog'

type Props = {
  data: INFTData[]
  swappable: number[]
}

const GalleryItems = (props: Props) => {
  const { data, swappable } = props

  const [isToggled, setIsToggled] = useState(false)
  const [imageSrc, setImageSrc] = useState('')

  const handleImageClick = (src: string) => {
    setIsToggled(true)
    setImageSrc(src)
  }

  const isSwappable = (name: string) => {
    const id = parseInt(name.split(' ')[1])
    return swappable.includes(id)
  }

  return (
    <div className='flex-1 pt-4 md:pt-9 px-0 md:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-4'>
      {data.map((item, i) => (
        <div
          key={i}
          className='flex flex-col group cursor-pointer relative'
          onClick={() => handleImageClick(item.imageUrl)}
        >
          <div
            className={`absolute top-2 right-2 rounded-full bg-white shadow-md w-[28px] h-[28px] flex justify-center items-center ${isSwappable(item.name) ? 'visible' : 'invisible'} group-hover:scale-[102%] z-10`}
          >
            <Image
              src='/assets/common/swap.svg'
              alt='swap'
              width={16}
              height={16}
              className='transform translate-x-[1px]'
            />
          </div>
          <img
            src={item.imageUrl}
            alt='dan'
            className='w-full aspect-square rounded-xl overflow-hidden shadow-md group-hover:scale-[102%] transition-all duration-300 ease-in-out'
          />
          <div className='pt-3 w-full '>
            <p className='text-secondary-400 text-center text-[10px]'>
              {item.project}
            </p>
            <p className='text-secondary-500 text-center text-[11px]'>
              {item.name}
            </p>
          </div>
        </div>
      ))}
      <GalleryDialog
        isToggled={isToggled}
        setIsToggled={setIsToggled}
        imageSrc={imageSrc}
      />
    </div>
  )
}

export default GalleryItems
