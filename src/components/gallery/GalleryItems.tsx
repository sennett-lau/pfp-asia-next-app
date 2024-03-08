import { INFTData } from '@/types'
import { useState } from 'react'
import GalleryDialog from './GalleryDialog'

type Props = {
  data: INFTData[]
}

const GalleryItems = (props: Props) => {
  const { data } = props

  const [isToggled, setIsToggled] = useState(false)
  const [imageSrc, setImageSrc] = useState('')

  const handleImageClick = (src: string) => {
    setIsToggled(true)
    setImageSrc(src)
  }

  return (
    <div className='flex-1 pt-4 md:pt-9 px-0 md:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-4'>
      {data.map((item, i) => (
        <div
          key={i}
          className='flex flex-col group cursor-pointer'
          onClick={() => handleImageClick(item.imageUrl)}
        >
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
