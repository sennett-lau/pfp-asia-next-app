import FloatBox from '@/components/common/FloatBox'
import type { ReactElement, ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'REDT | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
  alternates: {
    canonical: 'https://pfpasia.com/redt',
    languages: {
      'en-US': 'https://pfpasia.com/redt',
    },
  },
  openGraph: {
    title: 'REDT | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
  },
  twitter: {
    title: 'REDT | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
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

      <FloatBox />
    </div>
  )
}

export default StoryLayout
