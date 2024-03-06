import { UNISWAP_URL } from '@/config/links'
import Image from 'next/image'
import Link from 'next/link'
const FloatBox = () => {
  return (
    <div className='h-20 flex px-4 items-center bg-primary-600 fixed left-[36px] bottom-[42px] rounded-md'>
      <div className='w-[115px] h-full relative'>
        <Image
          src='/assets/pfps/dan-1.png'
          alt='Dan'
          width={115}
          height={115}
          className='absolute left-0 bottom-0'
        />
      </div>
      <p className='mr-4 text-white font-bold text-2xl'>$PFPASIA</p>
      <Link
        href={UNISWAP_URL}
        className='bg-light-500 px-4 py-2 text-secondary-500 font-xl font-bold hover:text-primary-500 transition-all duration-300'
        target='_blank'
      >
        BUY
      </Link>
    </div>
  )
}

export default FloatBox
