import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useRef } from 'react'

type Props = {
  text: string
  icon?: string
  list: { text: string; href: string; isTargetBlank?: boolean }[]
  listIndex: number
  showListIndex: number | null
  setShowListIndex: (index: number | null) => void
}

const NavList = (props: Props) => {
  const { text, icon, list, listIndex } = props

  const buttonRef = useRef(null)

  const clickHandler = () => {
    if (buttonRef && buttonRef.current) {
      ;(buttonRef.current as HTMLElement).click()
    }
  }

  return (
    <Menu>
      {({ open }) => (
        <div
          className='flex pb-[11.5px]'
          onMouseEnter={clickHandler}
          onMouseLeave={clickHandler}
        >
          <Menu.Button ref={buttonRef}>
            <div
              className={`flex gap-2 py-2 px-4 ${open ? 'bg-primary-400 bg-opacity-100' : 'bg-white bg-opacity-70'} hover:bg-primary-400 rounded-md text-black cursor-pointer transition-all duration-300 text-xs items-center`}
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
          </Menu.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='w-[149px] absolute bottom-5 py-2 px-3 gap-1 bg-light-500 text-xs rounded-md text-secondary-500 translate-y-full flex flex-col shadow-md'>
              {list.map((item, index) => {
                return (
                  <Menu.Item key={index} as={Fragment}>
                    <Link
                      key={index}
                      href={item.href}
                      target={item.isTargetBlank ? '_blank' : '_self'}
                      className='hover:text-primary-500'
                    >
                      {item.text}
                      {item.isTargetBlank && ' ↗'}
                    </Link>
                  </Menu.Item>
                )
              })}
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  )
}

export default NavList
