import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type Props = {
  text: string
  list?: { text: string; href: string; isTargetBlank: boolean }[]
  href?: string
  icon?: string
  isTargetBlank?: boolean
}

const NavMenuItemContainer = (props: Props) => {
  const { text, list, href, icon, isTargetBlank } = props

  const [isShowList, setIsShowList] = useState(false)

  const toggleList = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsShowList(!isShowList)
  }

  return (
    <>
      {list && list.length > 0 ? (
        <div className='flex flex-col'>
          <div className='py-3 flex justify-between' onClick={toggleList}>
            {!icon ? (
              <p className='font-black text-xl text-black'>{text}</p>
            ) : (
              <Image src={icon} alt={text} width={20} height={20} />
            )}
            <Image
              src='/assets/common/chevron.svg'
              alt='Chevron Down'
              width={12}
              height={12}
            />
          </div>
          <div
            className={`flex flex-col gap-2 ${isShowList ? 'max-h-[300px]' : 'max-h-0'} overflow-hidden transition-all duration-300`}
          >
            {list.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className='text-black text-xl'
                target={item.isTargetBlank ? '_blank' : '_self'}
              >
                {item.text}
                {item.isTargetBlank && ' ↗'}
              </Link>
            ))}
            <div className='w-full h-3' />
          </div>
        </div>
      ) : (
        <Link
          href={href!}
          className='outline-none'
          target={isTargetBlank ? '_blank' : '_self'}
        >
          <div className='py-3 flex justify-between'>
            <p className='font-black text-xl text-black'>
              {text}
              {isTargetBlank && ' ↗'}
            </p>
            {icon && <Image src={icon} alt={text} width={16} height={16} />}
          </div>
        </Link>
      )}
    </>
  )
}

export default NavMenuItemContainer
