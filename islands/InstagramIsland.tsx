/** @jsx h */
import { h, createRef } from 'preact'
import { tw } from '@twind'
import { useState } from 'preact/hooks'

export default function InstagramIsland() {
  const [ig, setIg] = useState('ig content static')

  const rawValue = createRef()
  return (
    <div>
      <textarea
        class={tw`bg-purple-400 w-full`}
        type="text"
        ref={rawValue}
      ></textarea>
      <button
        class={tw`w(full sm:auto) text(lg uppercase gray-100) bg-purple(800 700(hover:& focus:&)) ring(purple-400 focus-visible:4)) px-6 py-2 rounded-full transition-colors duration-300"
>`}
        onClick={() => setIg(rawValue.current.value)}
      >
        POST
      </button>
      <div dangerouslySetInnerHTML={{ __html: ig }} />
    </div>
  )
}

// <iframe src="https://www.instagram.com/p/CfvlfrqPvRO/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
