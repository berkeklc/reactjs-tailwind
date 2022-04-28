import './App.css';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { ReactComponent as Discord } from './assets/discord.svg';
import { ReactComponent as Twitter } from './assets/twitter.svg';
import MediaComponent from './components/MediaComponent';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function App() {
  return (
    <>
    <Disclosure as="nav" className="bg-gray-800 z-10 relative">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
             
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                  <Menu as="div" className="ml-3 py-2 px-2 relative bg-[url('./assets/brush2.png')] bg-center bg-[length:153px] bg-no-repeat">
                  <div>
                  <Menu.Button className="">
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="#"
                        className="text-white  hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium font-custom1"
                      >
                       Collections
                      </a>
                    </Menu.Button>
                  </div>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Cupcats
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Cupcat Kittens 
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                          Cupcats rarity 
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                         Kittens rarity 
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
               
                </Menu>
                <Menu as="div" className="ml-3 py-2 px-2 relative bg-[url('./assets/brush4.png')] bg-center bg-[length:153px] bg-no-repeat">
                  <div>
                  <Menu.Button className="">
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="#"
                        className=" text-white relative  hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium font-custom1"
                      >
                       Dashboard 
                      <span className="font-custom2 underline-offset-5 absolute text-blue-500 bottom-0 right-0">soon</span>

                      </a>
                    </Menu.Button>
                  </div>
                </Menu>
                <Menu as="div" className="ml-3 py-2 px-2 relative bg-[url('./assets/brush3.png')] bg-center bg-[length:153px] bg-no-repeat">
                  <div>
                  <Menu.Button className="">
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="#"
                        className="text-white relative   hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium font-custom1"
                      >
                       Shelter
                      <span className="font-custom2 absolute text-blue-500 bottom-0 right-0">soon</span>

                      </a>
                    </Menu.Button>
                  </div>
                </Menu>
                <Menu as="div" className="ml-3 py-2 px-2 relative bg-[url('./assets/brush1.png')] bg-center bg-[length:153px] bg-no-repeat">
                  <div>
                  <Menu.Button className="">
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="#"
                        className="text-white relative  hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium font-custom1"
                      >
                       Cat's Mind 
                      <span className="font-custom2 absolute text-blue-500 bottom-0 right-0">soon</span>

                      </a>
                    </Menu.Button>
                  </div>
                </Menu>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            
              <Discord className="h-8 fill-white w-40	" />
              <Twitter className="h-8 fill-white	" />
            
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
            
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

    <MediaComponent />

    </>
  )
}

export default App;
