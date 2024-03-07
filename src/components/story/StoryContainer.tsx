import Image from 'next/image'

type Props = {
  title: string
  title2: string
  children: React.ReactNode
  pfp: string
  alt: string
}

const StoryContainer: React.FC<Props> = (props) => {
  const { title, title2, children, pfp, alt } = props

  return (
    <div className='max-w-11xl mx-auto w-full px-4 flex-1 flex'>
      <div className='flex flex-col flex-1 pt-[120px] md:pt-[160px] pb:8 md:pb-10'>
        <h1 className='text-2xl md:text-6xl font-bold text-primary-700'>
          {title}
        </h1>
        <h1 className='text-2xl md:text-6xl font-bold text-primary-700 mb-12'>
          {title2}
        </h1>
        <div className='text-sm text-secondary-500 flex flex-col gap-6'>
          {children}
        </div>
      </div>
      <div className='relative min-h-[calc(100vh-128px)] hidden lg:block w-1/3'>
        <Image
          src={pfp}
          alt={alt}
          width={719}
          height={719}
          className='h-[calc(100vh-88px)] w-auto fixed top-[88px] right-0 aspect-square'
        />
      </div>
    </div>
  )
}

export default StoryContainer
