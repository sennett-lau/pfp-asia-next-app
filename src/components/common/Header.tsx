'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NavBar from './NavBar/NavBar'

const Header = () => {
  const pathname = usePathname()

  return (
    <header
      className={`fixed top-0 w-full py-4 px-6 z-10 bg-light-500 ${pathname !== '/' ? 'bg-opacity-100 shadow-md' : 'bg-opacity-0'}`}
    >
      <div className='flex justify-between max-w-11xl mx-auto'>
        <Link href='/' className='rounded-sm overflow-hidden'>
          <Image src='/assets/logo.svg' alt='Logo' width={55} height={55} />
        </Link>
        <NavBar />
      </div>
    </header>
  )
}

export default Header
