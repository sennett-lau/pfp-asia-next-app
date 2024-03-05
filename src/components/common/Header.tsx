import Image from 'next/image'
import Link from 'next/link'
import NavBar from './NavBar/NavBar'

const Header = () => {
  return (
    <header className='fixed top-0 w-full py-4 px-6'>
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
