import Image from 'next/image'

const Profile = () => {
  return (
    <div className='max-w-11xl mx-auto w-full px-4 flex md:pb-0 justify-center'>
      <div className='flex flex-col gap-4 bg-white rounded-lg shadow-lg px-4 py-8 w-full md:w-1/2'>
        <button>
          <div className='flex items-center justify-center w-full h-20 bg-primary-500 text-white rounded-lg'>
            Connect Wallet
          </div>
        </button>

        <button>
          <div className='flex items-center justify-center w-full h-20 bg-discord-500 text-white rounded-lg'>
            Connect Discord
            <Image
              src='/assets/icons/discord-white.svg'
              alt='Discord'
              width={20}
              height={20}
              className='ml-2'
            />
          </div>
        </button>
      </div>
    </div>
  )
}

export default Profile
