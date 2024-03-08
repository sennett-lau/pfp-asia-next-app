import { IREDTSection } from '@/types'
import Link from 'next/link'

type Props = {
  sections: IREDTSection[]
  sectionIndex: number
}

const REDTContentTable = (props: Props) => {
  const { sections, sectionIndex } = props

  return (
    <table>
      <tbody>
        {sections[sectionIndex].contents.map((content, index) => (
          <tr key={index} className='flex flex-col md:flex-row mb-4 md:mb-0'>
            <td className='w-fit md:w-[250px]'>
              <p className='text-secondary-500 text-xl font-bold md:py-2'>
                {content.label}:
              </p>
            </td>
            <td>
              {content.isUrl ? (
                <Link
                  href={content.url!}
                  target='_blank'
                  className='text-primary-500 text-xl'
                >
                  {content.text} ↗
                </Link>
              ) : (
                <p className='text-secondary-500 text-md md:text-xl'>
                  {content.text}
                </p>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default REDTContentTable
