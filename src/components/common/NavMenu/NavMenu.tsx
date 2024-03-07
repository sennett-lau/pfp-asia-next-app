import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { navItems } from '../NavBar/NavBar'
import NavMenuItemContainer from './NavMenuItemContainer'

type Props = {
  isToggled: boolean
  setIsToggled: (isToggled: boolean) => void
}

const NavMenu = (props: Props) => {
  const { isToggled, setIsToggled } = props

  return (
    <Transition appear show={isToggled} as={Fragment}>
      <Dialog onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-white/80 backdrop-blur-sm' />
        </Transition.Child>
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex pt-[88px] min-h-full flex-col'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full flex-1 transform overflow-hidden px-6 text-left align-middle transition-all'>
                {navItems.map((item, i) => (
                  <div
                    key={i}
                    className='w-full border-b-[1px] border-secondary-400/40'
                  >
                    <NavMenuItemContainer
                      text={item.text}
                      list={item.list}
                      href={item.href}
                      icon={item.icon}
                    />
                  </div>
                ))}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default NavMenu
