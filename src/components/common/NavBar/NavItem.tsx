import Image from 'next/image'
import Link from 'next/link'

type Props = {
  text: string
  href: string
  icon?: string
  isTargetBlank?: boolean
}

const NavItem = (props: Props) => {
  const { text, href, icon, isTargetBlank } = props
  return (
    <Link
      href={href}
      className='flex gap-2 py-2 px-4 bg-white hover:bg-primary-400 bg-opacity-70 rounded-md text-black cursor-pointer transition-all duration-300 text-xs'
      target={isTargetBlank ? '_blank' : '_self'}
    >
      {icon ? (
        <Image src={icon} alt={text} width={16} height={16} />
      ) : (
        <span>{text}</span>
      )}
    </Link>
  )
}

export default NavItem
