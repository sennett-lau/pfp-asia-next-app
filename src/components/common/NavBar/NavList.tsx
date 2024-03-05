import Image from 'next/image'
import Link from 'next/link'

type Props = {
  text: string
  icon?: string
  list: { text: string; href: string; isTargetBlank?: boolean }[]
  listIndex: number
  showListIndex: number | null
  setShowListIndex: (index: number | null) => void
}

const NavList = (props: Props) => {
  const { text, icon, list, listIndex, showListIndex, setShowListIndex } = props

  return (
    <div className='relative'>
      <div
        className='flex gap-2 py-2 px-4 bg-white hover:bg-primary-400 bg-opacity-70 rounded-md text-black cursor-pointer transition-all duration-300 text-xs'
        onClick={() =>
          setShowListIndex(showListIndex === listIndex ? null : listIndex)
        }
      >
        {icon ? (
          <Image src={icon} alt={text} width={16} height={16} />
        ) : (
          <span>{text}</span>
        )}
        <Image
          src='/assets/common/chevron.svg'
          alt='Chevron Down'
          width={8}
          height={8}
        />
      </div>

      <div
        className={`w-[149px] absolute -bottom-4 right-0 py-2 px-3 gap-1 bg-light-500 text-xs rounded-md transition-all duration-300 text-secondary-500 translate-y-full flex-col ${showListIndex !== listIndex ? 'hidden' : 'flex'} shadow-md`}
      >
        {list.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.href}
              target={item.isTargetBlank ? '_blank' : '_self'}
              className='hover:text-primary-500'
            >
              {item.text}
              {item.isTargetBlank && ' ↗'}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default NavList
