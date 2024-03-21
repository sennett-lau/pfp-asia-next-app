import type { Metadata } from 'next'
import type { ReactElement, ReactNode } from 'react'

export const metadata: Metadata = {
  title:
    'Profile | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
  alternates: {
    canonical: 'https://community.pfpasia.com/profile',
    languages: {
      'en-US': 'https://community.pfpasia.com/profile',
    },
  },
  openGraph: {
    title:
      'Profile | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
  },
  twitter: {
    title:
      'Profile | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
  },
}

const ProfileLayout = ({
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

export default ProfileLayout
