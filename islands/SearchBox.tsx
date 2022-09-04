/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { tw } from '@twind'

interface SearchProps {
  start?: number
}

export default function SearchBox(props: SearchProps) {
  const [count, setCount] = useState(props.start)
  return (
    <div class={tw`mt-10`}>
      <div class={tw`grid grid-cols-2 gap-4`}>
        <div class={tw`relative`}>
            <input type="search" placeholder="Wyszukaj" class={tw`w-full text-gray-600 border-2 border-gray-300 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none`} />
            <button type="submit" class={tw`absolute right-0 top-0 mt-2 mr-2`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              class={tw`w-6 h-6`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>

        <div>09</div>
      </div>
    </div>
  )
}

