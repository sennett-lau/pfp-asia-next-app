'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import NavItem from './NavItem'
import NavList from './NavList'

const navItems = [
  {
    text: 'STORY',
    list: [
      { text: 'New Era', href: '/story/new-era' },
      { text: 'Nvuwa', href: '/story/nvuwa' },
      { text: 'Asian Raise', href: '/story/asian-raise' },
      { text: 'RED Scene', href: '/story/red-scene' },
    ],
  },
  { text: 'REDT', href: '/redt' },
  { text: '$PFPASIA', href: '/pfpasia' },
  { text: 'GALLERY', href: '/gallery' },
  { text: 'REDEX', href: 'https://red.pfp.asia' },
  {
    text: 'x',
    icon: '/assets/icons/x.svg',
    list: [
      {
        text: 'PFPAsia',
        href: 'https://x.com/PFPAsia',
        isTargetBlank: true,
      },
      {
        text: 'ERC_1111',
        href: 'https://x.com/ERC_1111',
        isTargetBlank: true,
      },
      {
        text: 'REDEX_1111',
        href: 'https://x.com/REDEX_1111',
        isTargetBlank: true,
      },
      {
        text: 'Koreatown_1111',
        href: 'https://x.com/Koreatown_1111',
        isTargetBlank: true,
      },
      {
        text: 'Nihonmachi_1111',
        href: 'https://x.com/Nihonmachi_1111',
        isTargetBlank: true,
      },
      {
        text: 'ChinaTown_1111',
        href: 'https://x.com/ChinaTown_1111',
        isTargetBlank: true,
      },
    ],
  },
  {
    text: 'telegram',
    icon: '/assets/icons/telegram.svg',
    href: 'https://t.me/PFPAsian',
    isTargetBlank: true,
  },
  {
    text: 'discord',
    icon: '/assets/icons/discord.svg',
    href: 'https://discord.gg/pfpasia',
    isTargetBlank: true,
  },
]

const NavBar = () => {
  const [showListIndex, setShowListIndex] = useState<number | null>(null)

  const pathname = usePathname()

  useEffect(() => {
    setShowListIndex(null)
  }, [pathname])

  return (
    <div className='flex gap-2 items-center'>
      {navItems.map((item, index) => {
        return (
          <div key={index}>
            {item.list ? (
              <NavList
                text={item.text}
                icon={item.icon}
                list={item.list}
                listIndex={index}
                showListIndex={showListIndex}
                setShowListIndex={setShowListIndex}
              />
            ) : (
              <NavItem
                text={item.text}
                href={item.href}
                icon={item.icon}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default NavBar
