import { IREDTSection } from '@/types'
import Image from 'next/image'
import { useState } from 'react'

type Props = {
  sections: IREDTSection[]
  sectionIndex: number
  setSectionIndex: React.Dispatch<React.SetStateAction<number>>
}

const MoreList = (props: Props) => {
  const { sections, sectionIndex, setSectionIndex } = props

  const [isToggled, setIsToggled] = useState(false)
  return (
    <div
      className='flex md:hidden absolute right-2 top-12 bg-white bg-opacity-25 backdrop-blur-4 rounded-md shadow-sm flex-col py-2 px-4 text-secondary-500 font-bold text-right'
      onClick={() => setIsToggled(!isToggled)}
    >
      <div className='flex gap-2 justify-center'>
        <p>More</p>

        <Image
          src='/assets/common/chevron.svg'
          alt='Chevron'
          width={12}
          height={12}
        />
      </div>
      <div
        className={`flex flex-col gap-1 ${isToggled ? 'max-h-[300px]' : 'max-h-0'} overflow-hidden transition-all duration-300`}
      >
        {sections.map((section, index) => (
          <p
            key={index}
            className={`text-sm font-bold cursor-pointer ${sectionIndex === index ? 'text-primary-500' : 'text-secondary-500'} transition-all duration-300`}
            onClick={() => setSectionIndex(index)}
          >
            {section.tab}
          </p>
        ))}
      </div>
    </div>
  )
}

export default MoreList
