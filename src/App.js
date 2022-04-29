import './App.css';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { ReactComponent as Discord } from './assets/discord.svg';
import { ReactComponent as Twitter } from './assets/twitter.svg';
import MediaComponent from './components/MediaComponent';
import HiddenText from './components/HiddenText';
import ReactAudioPlayer from 'react-audio-player';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function App() {
  return (
    <>

<ReactAudioPlayer
  src="../sound.svg"
  autoPlay
  controls
/>
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
                  <div className="flex space-x-1">
                  <Menu as="div" className="m-0 py-2 px-6 relative bg-[url('./assets/brush2.png')] bg-[center_bottom_0px] bg-[length:166px] bg-no-repeat">
                  <div>
                  <Menu.Button className="">
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="javascript:void(0)"
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
                    <Menu.Items className="origin-top-right absolute -left-7 mt-2 w-40  shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item className="bg-[#da60c5a3] text-sm mb-0.5 block text-white text-center font-custom1">
                        {({ active }) => (
                          <a
                            href="https://opensea.io/collection/cupcatsofficial"
                            target="_blank"
                            className={classNames(active ? 'bg-black' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                            Cupcats
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item  className="bg-[#da60c5a3] text-sm mb-0.5 block text-white text-center font-custom1 ">
                        {({ active }) => (
                          <a
                            href="https://opensea.io/collection/cupcatkittens"
                            target="_blank"
                            className={classNames(active ? 'bg-black' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                             Kittens 
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item  className="bg-[#da60c5a3] text-sm mb-0.5 block text-white text-center font-custom1">
                        {({ active }) => (
                          <a
                            href="_https://catsinthecups.com/rarity/)"
                            target="_blank"
                            className={classNames(active ? 'bg-black' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                          Cupcats rarity 
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item  className="bg-[#da60c5a3] text-sm mb-0.5 block text-white text-center font-custom1">
                        {({ active }) => (
                          <a
                            href="https://kittens.catsinthecups.com/rarity/"
                            target="_blank"
                            className={classNames(active ? 'bg-black' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                         Kittens rarity 
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
               
                </Menu>
                <Menu as="div" className="m-0  py-2 px-6 relative bg-[url('./assets/brush1.png')] bg-[center_bottom_2px] bg-[length:132px] bg-no-repeat">
                  <div>
                  <Menu.Button className="">
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="javascript:void(0)"
                        className=" text-white relative  hover:text-white',
                        'px-3 py-2 rounded-md text-xs font-medium font-custom1"
                      >
                       Dashboard 
                      <span className="font-custom2 underline-offset-5 absolute text-[#548bee] bottom-0 -right-0.5 soon">soon</span>

                      </a>
                    </Menu.Button>
                  </div>
                </Menu>
                <Menu as="div" className="m-0 py-2 px-6 relative bg-[url('./assets/brush3.png')] bg-[center_bottom_3px] bg-[length:128px] bg-no-repeat">
                  <div>
                  <Menu.Button className="">
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="javascript:void(0)"
                        className="text-white relative   hover:text-white',
                        'px-3 py-2 rounded-md text-xs font-medium font-custom1"
                      >
                       Shelter
                      <span className="font-custom2 absolute text-blue-500 bottom-0 -right-1.5  soon">soon</span>

                      </a>
                    </Menu.Button>
                  </div>
                </Menu>
                <Menu as="div" className="m-0 py-2 px-6 relative bg-[url('./assets/brush4.png')] bg-[center_bottom_3px] bg-[length:147px] bg-no-repeat">
                  <div>
                  <Menu.Button className=""> 
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="javascript:void(0)"
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
            <a target="_blank" href="https://twitter.com/catsinthecups/" >
            <Twitter className="h-8 fill-[#548bee]	hover:fill-white" />
            </a>
            <a target="_blank" href="https://discord.gg/cupcats" >
            <Discord className="h-8 fill-[#548bee] hover:fill-white w-28	" />
            </a>
            
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
            <Menu as="div" className="ml-3 py-2 px-2 relative bg-[url('./assets/brush2.png')] bg-[center_left_-24px] bg-[length:166px] bg-no-repeat">
                  <div>
                  <Menu.Button className="">
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="javascript:void(0)"
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
                    <Menu.Items className="origin-top-right relative left-0 mt-2 w-48  shadow-lg py-1  ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item className="bg-[#da60c5a3] block text-white font-custom1 p-1 text-sm mb-0.5 ">
                        {({ active }) => (
                          <a
                            href="https://opensea.io/collection/cupcatsofficial"
                            target="_blank"
                            className={classNames(active ? 'bg-black' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                            Cupcats
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item className="bg-[#da60c5a3] block text-white font-custom1 p-1 text-sm mb-0.5 ">
                        {({ active }) => (
                          <a
                            href="https://opensea.io/collection/cupcatkittens"
                            target="_blank"
                            className={classNames(active ? 'bg-black' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                           Kittens 
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item className="bg-[#da60c5a3] block text-white font-custom1 p-1 text-sm mb-0.5 ">
                        {({ active }) => (
                          <a
                            href="https://catsinthecups.com/rarity"
                            target="_blank"
                            className={classNames(active ? 'bg-black' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                          Cupcats rarity 
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item className="bg-[#da60c5a3] block text-white font-custom1 p-1 text-sm mb-0.5 ">
                        {({ active }) => (
                          <a
                            href="https://kittens.catsinthecups.com/rarity/"
                            target="_blank"
                            className={classNames(active ? 'bg-black' : '', 'block px-4 py-2 text-sm text-white')}
                          >
                         Kittens rarity 
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
               
                </Menu>
                <Menu as="div" className="ml-3 py-2 px-2 relative   bg-[url('./assets/brush1.png')] bg-[center_left_-14px] bg-[length:141px] bg-no-repeat">
                  <div>
                  <Menu.Button className="">
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="javascript:void(0)"
                        className=" text-white relative  hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium font-custom1"
                      >
                       Dashboard 
                      <span className="font-custom2 underline-offset-5 absolute text-blue-500 bottom-0 right-0 soon">soon</span>

                      </a>
                    </Menu.Button>
                  </div>
                </Menu>
                <Menu as="div" className="ml-3 py-2 px-2 relative bg-[url('./assets/brush3.png')] bg-[center_left_-16px] bg-[length:121px] bg-no-repeat">
                  <div>
                  <Menu.Button className="">
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="javascript:void(0)"
                        className="text-white relative   hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium font-custom1"
                      >
                       Shelter
                      <span className="font-custom2 absolute text-blue-500 bottom-0 right-0 soon">soon</span>

                      </a>
                    </Menu.Button>
                  </div>
                </Menu>
                <Menu as="div" className="ml-3 py-2 px-2 relative  bg-[url('./assets/brush4.png')] bg-[center_left_-18px] bg-[length:143px] bg-no-repeat">
                  <div>
                  <Menu.Button className="">
                      <span className="sr-only">Open user menu</span>
                      <a  
                        href="javascript:void(0)"
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
    <HiddenText />

 
    </>
  )
}

export default App;
