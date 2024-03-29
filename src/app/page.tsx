import FloatBox from '@/components/common/FloatBox'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full flex-1 flex justify-center items-center bg-dan lg:bg-index bg-no-repeat bg-cover bg-center'>
      <Image
        src='/assets/PFPASIA.png'
        alt='PFPASIA'
        width={1246}
        height={228}
        className='max-w-[80vw] hidden lg:block'
      />
      <FloatBox />
    </div>
  )
}
