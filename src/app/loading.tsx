const LoadingPage = () => {
  return (
    <div className='flex items-center justify-center h-screen '>
      <div className='absolute top-0 left-0 w-full h-[90px] bg-black z-20'></div>
      <video
        className='max-w-full h-auto z-1000' // Adjust size as needed
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src='https://video.wixstatic.com/video/f81c05_3d220b6f00114ff1970df4ab2c92dd44/720p/mp4/file.mp4'
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default LoadingPage
