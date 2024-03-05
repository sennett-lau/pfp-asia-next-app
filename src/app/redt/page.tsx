'use client'
import Link from 'next/link'
import { useState } from 'react'

const sections = [
  {
    tab: '#ERC1111',
    title: 'ERC1111 (REDT Prptocol)',
    contents: [
      {
        label: 'Full name',
        text: 'Redirect Token',
      },
      {
        label: 'Type',
        text: 'Protocol',
      },
      {
        label: 'Description',
        text: 'The Unify Token that contains 0/1 status, representing ERC20 and ERC712',
      },
      {
        label: 'Origins',
        text: 'https://twitter.com/ERC_1111/status/1757430150323749288',
        isUrl: true,
      },
    ],
  },
  {
    tab: '$PFPAsia',
    title: '$PFPAsia',
    contents: [
      {
        label: 'Type',
        text: 'Project',
      },
      {
        label: 'Description',
        text: 'Redirect',
      },
      {
        label: 'Protocol',
        text: 'ERC-1111 (REDT Protocol)',
      },
      {
        label: 'RED Paper',
        text: 'https://twitter.com/PFPAsia/status/1754741367287517352',
        isUrl: true,
      },
    ],
  },
  {
    tab: '$PFPAsia - REDT1',
    title: '$PFPAsia - REDT1',
    contents: [
      {
        label: 'Total Volume',
        text: '10,000',
      },
      {
        label: 'Status',
        text: '1',
      },
      {
        label: '0/1 Ratio',
        text: '1:10,000',
      },
      {
        label: 'Launch',
        text: 'REDlist Mint Only',
      },
    ],
  },
  {
    tab: '$PFPAsia - REDT0',
    title: '$PFPAsia - REDT0',
    contents: [
      {
        label: 'Total Volume',
        text: '100,000,000',
      },
      {
        label: 'Status',
        text: '0',
      },
      {
        label: '0/1 Ratio',
        text: '10,000:1',
      },
      {
        label: 'Launch',
        text: 'Fair Launch',
      },
    ],
  },
  {
    tab: '!REDirect',
    title: '!REDirect',
    contents: [
      {
        label: 'Type',
        text: 'Asset management mechanism',
      },
      {
        label: 'Description',
        text: 'Swap asset between REDT0 and REDT1',
      },
    ],
  },
]

const REDT = () => {
  const [sectionIndex, setSectionIndex] = useState(0)
  return (
    <div className='max-w-11xl mx-auto w-full px-4 flex-1 flex'>
      <div className='flex-1 flex flex-col justify-center'>
        <div className='flex flex-col relative'>
          <div className='absolute -top-[160px] text-6xl font-bold text-primary-700'>
            {sections[sectionIndex].title}
          </div>
          <table>
            <tbody>
              {sections[sectionIndex].contents.map((content, index) => (
                <tr key={index}>
                  <td className='w-[250px]'>
                    <p className='text-secondary-500 text-xl font-bold py-2'>
                      {content.label}:
                    </p>
                  </td>
                  <td>
                    {content.isUrl ? (
                      <Link
                        href={content.text}
                        target='_blank'
                        className='text-primary-500 text-xl'
                      >
                        {content.text} ↗
                      </Link>
                    ) : (
                      <p className='text-secondary-500 text-xl'>
                        {content.text}
                      </p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='w-1/3 flex flex-col items-end justify-center gap-12'>
        {sections.map((section, index) => (
          <p
            className={`text-2xl font-bold cursor-pointer ${sectionIndex === index ? 'text-primary-500' : 'text-secondary-500'} transition-all duration-300`}
            onClick={() => setSectionIndex(index)}
          >
            {section.tab}
          </p>
        ))}
      </div>
    </div>
  )
}

export default REDT
