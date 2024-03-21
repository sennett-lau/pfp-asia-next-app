import FloatBox from '@/components/common/FloatBox'
import { PFPASIA_SITE_URL } from '@/config/links'
import type { Metadata } from 'next'
import type { ReactElement, ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'REDT | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
  alternates: {
    canonical: `${PFPASIA_SITE_URL}/redt`,
    languages: {
      'en-US': `${PFPASIA_SITE_URL}/redt`,
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
