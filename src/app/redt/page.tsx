'use client'
import MoreList from '@/components/redt/MoreList'
import REDTContentTable from '@/components/redt/REDTContentTable'
import { IREDTSection } from '@/types'
import { useState } from 'react'
import REDTSectionTabs from '../../components/redt/REDTSectionTabs'

const sections: IREDTSection[] = [
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
        text: 'X tweet',
        url: 'https://twitter.com/ERC_1111/status/1757430150323749288',
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
        text: 'X tweet',
        url: 'https://twitter.com/PFPAsia/status/1754741367287517352',
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
      <div className='flex-1 flex flex-col md:justify-center pt-[120px] md:pt-0'>
        <div className='flex flex-col relative'>
          <div className='md:absolute -top-[160px] text-2xl md:text-6xl font-bold text-primary-700 mb-6 md:mb-0'>
            {sections[sectionIndex].title}
          </div>
          <REDTContentTable sections={sections} sectionIndex={sectionIndex} />
          <MoreList
            sections={sections}
            sectionIndex={sectionIndex}
            setSectionIndex={setSectionIndex}
          />
        </div>
      </div>
      <REDTSectionTabs
        sections={sections}
        sectionIndex={sectionIndex}
        setSectionIndex={setSectionIndex}
      />
    </div>
  )
}

export default REDT
