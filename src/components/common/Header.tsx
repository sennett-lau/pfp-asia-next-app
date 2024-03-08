'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Hamburger from '../buttons/Hamburger'
import NavBar from './NavBar/NavBar'

const Header = () => {
  const pathname = usePathname()

  const [isToggled, setIsToggled] = useState(false)

  const getOpacity = () => {
    if (pathname === '/' || isToggled) {
      return 'bg-opacity-0'
    } else {
      return 'bg-opacity-100 shadow-md'
    }
  }

  return (
    <header
      className={`fixed top-0 w-full py-4 px-6 z-10 bg-light-500 ${getOpacity()} transition-all duration-300 ${pathname === '/' ? 'isIndex' : ''}`}
    >
      <div className='flex justify-between max-w-11xl mx-auto'>
        <Link href='/' className='rounded-sm overflow-hidden'>
          <Image
            src='/assets/logo.svg'
            alt='Logo'
            width={55}
            height={55}
            className='w-[42px] h-[42px] md:w-[55px] md:h-[55px]'
          />
        </Link>
        <NavBar />
        <div className='w-[42px] h-[42px] flex lg:hidden items-center'>
          <Hamburger isToggled={isToggled} setIsToggled={setIsToggled} />
        </div>
      </div>
    </header>
  )
}

export default Header
