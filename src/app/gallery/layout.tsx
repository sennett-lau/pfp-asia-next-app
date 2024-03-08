import type { Metadata } from 'next'
import type { ReactElement, ReactNode } from 'react'

export const metadata: Metadata = {
  title:
    'Gallery | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
  alternates: {
    canonical: 'https://pfpasia.com/gallery',
    languages: {
      'en-US': 'https://pfpasia.com/gallery',
    },
  },
  openGraph: {
    title:
      'Gallery | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
  },
  twitter: {
    title:
      'Gallery | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
  },
}

const StoryLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement => {
  return (
    <div className='w-full flex-1 flex flex-col justify-center items-center bg-light-500'>
      {children}
    </div>
  )
}

export default StoryLayout
