'use client'

import NavMenu from '../common/NavMenu/NavMenu'

type Props = {
  isToggled: boolean
  setIsToggled: (isToggled: boolean) => void
}

const Hamburger = (props: Props) => {
  const { isToggled, setIsToggled } = props

  return (
    <div
      className={`hamburger${isToggled ? ' active' : ''}`}
      onClick={() => setIsToggled(!isToggled)}
    >
      <span className='line line-1' />
      <span className='line line-2' />
      <NavMenu isToggled={isToggled} setIsToggled={setIsToggled} />
    </div>
  )
}

export default Hamburger
