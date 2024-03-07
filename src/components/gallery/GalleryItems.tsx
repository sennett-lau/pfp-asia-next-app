export interface INFTData {
  imageUrl: string
  project: string
  name: string
}

type Props = {
  data: INFTData[]
}


const GalleryItems = (props: Props) => {
  const { data } = props

  return (
    <div className='flex-1 pt-4 md:pt-9 px-0 md:px-8 grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-4'>
      {data.map((item, i) => (
        <div key={i} className='flex flex-col group cursor-pointer'>
          <img
            src={item.imageUrl}
            alt='dan'
            className='w-full aspect-square rounded-xl overflow-hidden shadow-md group-hover:scale-[102%] transition-all duration-300 ease-in-out'
          />
          <div className='pt-3 w-full '>
            <p className='text-secondary-400 text-center text-[10px]'>
              {item.project}
            </p>
            <p className='text-secondary-500 text-center text-[11px]'>
              {item.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GalleryItems
