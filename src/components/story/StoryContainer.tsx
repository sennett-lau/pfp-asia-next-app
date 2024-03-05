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
    <div className='w-full flex-1 flex'>
      <div className='flex flex-col flex-1 pt-[128px]'>
        <h1 className='text-5xl font-bold text-primary-500'>{title}</h1>
        <h1 className='text-5xl font-bold text-primary-500 mb-12'>{title2}</h1>
        <div className='text-sm text-secondary-500'>{children}</div>
      </div>
      <div className='relative min-h-[calc(100vh-128px)] w-1'>
        <Image
          src={pfp}
          alt={alt}
          width={719}
          height={719}
          className='h-[calc(100vh-128px)] w-auto fixed top-[88px] right-0 aspect-square'
        />
      </div>
    </div>
  )
}

export default StoryContainer
