import { PFPASIA_SITE_URL } from '@/config/links'
import type { Metadata } from 'next'
import type { ReactElement, ReactNode } from 'react'

export const metadata: Metadata = {
  title:
    'Gallery | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
  alternates: {
    canonical: `${PFPASIA_SITE_URL}/gallery`,
    languages: {
      'en-US': `${PFPASIA_SITE_URL}/gallery`,
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
