/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { tw } from '@twind'

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  let menuButton: any
  if (navbarOpen) {
    // X
    menuButton = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={tw`h-5 w-5`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    )
  } else {
    // BURGER
    menuButton = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={tw`h-5 w-5`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    )
  }

  const mainURL = 'http://localhost:8000'
  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]
  return (
    <nav
      class={tw`relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-500 mb-3`}
    >
      <div
        class={tw`container px-2 mx-auto flex flex-wrap items-center justify-between`}
      >
        <div
          class={tw`w-full relative flex justify-between lg:(w-auto static block justify-start)`}
        >
          <a
            class={tw`text-sm font-bold leading-relaxed flex items-center mr-4 py-2 whitespace-nowrap uppercase text-white`}
            href={mainURL}
          >
            <img
              src="/logo.svg"
              height="100px"
              alt="the fresh logo: a sliced lemon dripping with juice"
            />
            red Tailwind Starter Kit
          </a>
          <button
            class={tw`text(white xl) cursor-pointer leading-none px-3 py-1 border(solid transparent) rounded bg-transparent block outline-none focus:outline-none lg:hidden `}
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {menuButton}
          </button>
        </div>
        <div
          class={tw`lg:flex flex-grow items-center ${
            navbarOpen ? 'flex' : 'hidden'
          }`}
          id="example-navbar-danger"
        >
          <ul class={tw`flex flex-col list-none lg:(flex-row ml-auto)`}>
            {navigation.map((item) => (
              <li key={item.name} class={tw`nav-item`}>
                <a
                  class={tw`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75`}
                  href={item.href}
                >
                  <i
                    class={tw`fab fa-facebook-square text-lg leading-lg text-white opacity-75`}
                  ></i>
                  <span class={tw`ml-2`}>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
