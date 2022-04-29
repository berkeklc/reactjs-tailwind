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
    <Disclosure as="nav" className="bg-black z-10 relative">
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
                  <Menu as="div" className="ml-3 py-2 px-2 relative bg-[url('./assets/brush2.png')] bg-[center_bottom_2px] bg-[length:153px] bg-no-repeat">
                  <div>
                  <Menu.Button className="">
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="#"
                        className="text-white  hover:text-white',
                        'px-3 py-2 rounded-md text-xs font-medium font-custom1"
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40  shadow-lg py-1 bg-[#da60c5a3] ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-black' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                            Cupcats
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-black' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                            Cupcat Kittens 
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-black' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                          Cupcats rarity 
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-black' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                         Kittens rarity 
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
               
                </Menu>
                <Menu as="div" className="ml-3 py-2 px-2 relative bg-[url('./assets/brush1.png')] bg-[center_bottom_4px] bg-[length:118px] bg-no-repeat">
                  <div>
                  <Menu.Button className="">
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="#"
                        className=" text-white relative  hover:text-white',
                        'px-3 py-2 rounded-md text-xs font-medium font-custom1"
                      >
                       Dashboard 
                      <span className="font-custom2 underline-offset-5 absolute text-[#548bee] bottom-0 -right-0.5 soon">soon</span>

                      </a>
                    </Menu.Button>
                  </div>
                </Menu>
                <Menu as="div" className="ml-3 py-2 px-2 relative bg-[url('./assets/brush3.png')] bg-[center_bottom_6px] bg-[length:101px] bg-no-repeat">
                  <div>
                  <Menu.Button className="">
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="#"
                        className="text-white relative   hover:text-white',
                        'px-3 py-2 rounded-md text-xs font-medium font-custom1"
                      >
                       Shelter
                      <span className="font-custom2 absolute text-blue-500 bottom-0 -right-1.5  soon">soon</span>

                      </a>
                    </Menu.Button>
                  </div>
                </Menu>
                <Menu as="div" className="ml-3 py-2 px-2 relative bg-[url('./assets/brush4.png')] bg-[center_bottom_5px] bg-[length:140px] bg-no-repeat">
                  <div>
                  <Menu.Button className="">
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="#"
                        className="text-white relative  hover:text-white',
                        'px-3 py-2 rounded-md text-xs font-medium font-custom1"
                      >
                       Cat<span className="text-sm font-bold">'</span>s Mind 
                      <span className="font-custom2 absolute text-blue-500 bottom-0 -right-1.5  soon">soon</span>

                      </a>
                    </Menu.Button>
                  </div>
                </Menu>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            
              <Twitter className="h-8 fill-[#548bee]	hover:fill-white" />
              <Discord className="h-8 fill-[#548bee] hover:fill-white w-28	" />
            
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
            <Menu as="div" className="ml-3 py-2 px-2 relative  bg-center bg-[length:153px] bg-no-repeat">
                  <div>
                  <Menu.Button className="">
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="#"
                        className="text-white  hover:text-white',
                        'px-3 py-2 rounded-md text-xs font-medium font-custom1"
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
                    <Menu.Items className="origin-top-right relative left-0 mt-2 w-48  shadow-lg py-1 bg-fuchsia-500 bg-opacity-20 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-black' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                            Cupcats
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-black' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                            Cupcat Kittens 
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-black' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                          Cupcats rarity 
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-black' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                         Kittens rarity 
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
               
                </Menu>
                <Menu as="div" className="ml-3 py-2 px-2 relative  bg-center bg-[length:133px] bg-no-repeat">
                  <div>
                  <Menu.Button className="">
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="#"
                        className=" text-white relative  hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium font-custom1"
                      >
                       Dashboard 
                      <span className="font-custom2 underline-offset-5 absolute text-blue-500 bottom-0 right-0 soon">soon</span>

                      </a>
                    </Menu.Button>
                  </div>
                </Menu>
                <Menu as="div" className="ml-3 py-2 px-2 relative bg-center bg-[length:112px] bg-no-repeat">
                  <div>
                  <Menu.Button className="">
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="#"
                        className="text-white relative   hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium font-custom1"
                      >
                       Shelter
                      <span className="font-custom2 absolute text-blue-500 bottom-0 right-0 soon">soon</span>

                      </a>
                    </Menu.Button>
                  </div>
                </Menu>
                <Menu as="div" className="ml-3 py-2 px-2 relative  bg-center bg-[length:140px] bg-no-repeat">
                  <div>
                  <Menu.Button className="">
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="#"
                        className="text-white relative  hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium font-custom1"
                      >
                       Cat<span className="text-sm">'</span>s Mind  
                      <span className="font-custom2 absolute text-blue-500 bottom-0 right-0 soon">soon</span>

                      </a>
                    </Menu.Button>
                  </div>
                </Menu>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

    <MediaComponent />

  <p className="absolute left-24 bottom-36 glow font-custom1 opacity-0 p-5 text-2xl		 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]">CULTURE</p>
  <p className="absolute right-24 bottom-48 glow font-custom1 opacity-0 p-5 text-2xl		 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]">CORE</p>
  <p className="absolute left-64 top-36 glow font-custom1 opacity-0 p-5 text-2xl		 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]">CREATE</p>
  <p className="absolute left-96 bottom-28 glow font-custom1 opacity-0 p-5 text-2xl		 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]">CHARM</p>
  <p className="absolute right-24 top-72 glow font-custom1 opacity-0 p-5 text-2xl		 ease-in duration-300 hover:opacity-100 hover:ease-in hover:duration-500 text-[#da5fc5]">CATALYST</p>
    </>
  )
}

export default App;
