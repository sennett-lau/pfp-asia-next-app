import Image from 'next/image'

const GalleryToTopButton = () => {
  const backToTop = () => {
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      className='flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md fixed bottom-4 right-4'
      onClick={backToTop}
    >
      <Image
        src='/assets/common/chevron.svg'
        alt='filter'
        className='transform rotate-180'
        width={24}
        height={24}
      />
    </button>
  )
}

export default GalleryToTopButton
