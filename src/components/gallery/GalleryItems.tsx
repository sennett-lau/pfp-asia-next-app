const data = [
  {
    imageUrl: 'https://static.pfp.asia/pfpasia/images/3796.jpg',
    project: 'PFPAsia',
    name: 'No. 2270',
  },
]

const GalleryItems = () => {
  return (
    <div className='pt-9 px-8 grid grid-cols-5 gap-x-6 gap-y-4'>
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
