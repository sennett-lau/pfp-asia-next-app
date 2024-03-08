import { IREDTSection } from "@/types"

type Props = {
  sections: IREDTSection[]
  sectionIndex: number
  setSectionIndex: (index: number) => void
}

const REDTSectionTabs = (props: Props) => {
  const { sections, sectionIndex, setSectionIndex } = props

  return (
    <div className='w-1/3 hidden md:flex flex-col items-end justify-center gap-12'>
      {sections.map((section, index) => (
        <p
          key={index}
          className={`text-2xl font-bold cursor-pointer ${sectionIndex === index ? 'text-primary-500' : 'text-secondary-500'} transition-all duration-300`}
          onClick={() => setSectionIndex(index)}
        >
          {section.tab}
        </p>
      ))}
    </div>
  )
}

export default REDTSectionTabs
