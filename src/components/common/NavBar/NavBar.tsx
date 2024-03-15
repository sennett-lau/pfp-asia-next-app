'use client'
import {
  DISCORD_URL,
  PFPASIA_REDEX_URL,
  TELEGRAM_URL,
  X_CHINATOWN_1111_URL,
  X_ERC_1111_URL,
  X_KOREATOWN_1111_URL,
  X_NIHONMACHI_1111_URL,
  X_PFPASIA_URL,
  X_REDEX_1111_URL,
} from '@/config/links'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import NavItem from './NavItem'
import NavList from './NavList'

export const navItems = [
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
  {
    text: 'APP',
    list: [
      {
        text: 'REDEX',
        href: PFPASIA_REDEX_URL,
        isTargetBlank: true,
      },
      {
        text: 'REWARD',
        href: 'https://apps.apple.com/us/app/pfpasia/id1570791843',
        isTargetBlank: true,
      },
    ],
  },
  {
    text: 'x',
    icon: '/assets/icons/x.svg',
    list: [
      {
        text: 'PFPAsia',
        href: X_PFPASIA_URL,
        isTargetBlank: true,
      },
      {
        text: 'ERC_1111',
        href: X_ERC_1111_URL,
        isTargetBlank: true,
      },
      {
        text: 'REDEX_1111',
        href: X_REDEX_1111_URL,
        isTargetBlank: true,
      },
      {
        text: 'Koreatown_1111',
        href: X_KOREATOWN_1111_URL,
        isTargetBlank: true,
      },
      {
        text: 'Nihonmachi_1111',
        href: X_NIHONMACHI_1111_URL,
        isTargetBlank: true,
      },
      {
        text: 'ChinaTown_1111',
        href: X_CHINATOWN_1111_URL,
        isTargetBlank: true,
      },
    ],
  },
  {
    text: 'Telegram',
    icon: '/assets/icons/telegram.svg',
    href: TELEGRAM_URL,
    isTargetBlank: true,
  },
  {
    text: 'Discord',
    icon: '/assets/icons/discord.svg',
    href: DISCORD_URL,
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
    <div className='hidden lg:flex gap-2 pt-[11.5px]'>
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
                isTargetBlank={item.isTargetBlank}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default NavBar
