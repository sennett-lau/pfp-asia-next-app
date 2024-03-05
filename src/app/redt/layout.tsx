import FloatBox from '@/components/common/FloatBox'
import type { ReactElement, ReactNode } from 'react'
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
