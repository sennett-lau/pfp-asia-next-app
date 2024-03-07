import {
  DEXSCANNER_URL,
  DUNE_URL,
  ELEMENT_URL,
  MAGICEDEN_URL,
  NFTGO_URL,
  OPENSEA_URL,
  UNISWAP_URL,
} from '@/config/links'
import Image from 'next/image'
import Link from 'next/link'

const sections = [
  {
    title: '$PFPAsia REDT1',
    items: [
      {
        name: 'OpenSea',
        iconUrl: '/assets/icons/opensea.svg',
        href: OPENSEA_URL,
      },
      {
        name: 'Element',
        iconUrl: '/assets/icons/element.svg',
        href: ELEMENT_URL,
      },
      {
        name: 'MagicEden',
        iconUrl: '/assets/icons/magiceden.svg',
        href: MAGICEDEN_URL,
        width: 90,
        height: 32,
      },
    ],
  },
  {
    title: '$PFPAsia REDT0',
    items: [
      {
        name: 'Uniswap',
        iconUrl: '/assets/icons/uniswap.svg',
        href: UNISWAP_URL,
      },
    ],
  },
  {
    title: 'Analytics',
    items: [
      {
        name: 'DexScanner',
        iconUrl: '/assets/icons/dexscanner.svg',
        href: DEXSCANNER_URL,
      },
      {
        name: 'NFTGo',
        iconUrl: '/assets/icons/nftgo.svg',
        href: NFTGO_URL,
      },
      {
        name: 'Dune',
        iconUrl: '/assets/icons/dune.svg',
        href: DUNE_URL,
      },
    ],
  },
]

const PFPAsia = () => {
  return (
    <div className='max-w-11xl mx-auto w-full px-4 flex-1 flex flex-col pt-[160px] pb-8 md:pb-0'>
      <h1 className='text-2xl md:text-5xl text-primary-700 font-bold mb-12'>
        More on $PFPAsia
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-[50px]'>
        {sections.map((section, i) => (
          <div key={i} className='flex flex-col gap-5'>
            <p className='text-xl md:text-2xl font-bold text-secondary-500'>
              {section.title}
            </p>
            <div className='flex gap-4 md:gap-8'>
              {section.items.map((item, ii) => (
                <Link
                  href={item.href}
                  key={ii}
                  className='w-[126px] h-[152px] pb-3 flex flex-col rounded-xl shadow-md bg-light-400'
                  target='_blank'
                >
                  <div className='w-full flex-1 relative'>
                    <Image
                      src={item.iconUrl}
                      alt={item.name}
                      width={item.width || 76}
                      height={item.height || 76}
                      className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'
                    />
                  </div>
                  <div className='flex justify-center'>
                    <p className='font-bold text-secondary-500'>{item.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PFPAsia
