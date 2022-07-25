/** @jsx h */
import { h } from 'preact'
import { tw } from '@twind'

export default function Card(props: { title: string; description: string }) {
  return (
    <div
      class={tw`
      max-w-xl w-full mx-auto px-5
      lg:(max-w-full flex)
      `}
    >
      <div
        class={tw`
        h-72 flex-none bg-contain bg-center bg-no-repeat rounded-t text-center overflow-hidden  
        lg:(w-72 rounded-t-none rounded-l)
         `}
        style="background-image: url('https://picsum.photos/200')"
      ></div>
      <div
        class={tw`
        border(r b l gray-400 bg-white) rounded-b p-4 flex flex-col justify-between leading-normal w-full
        lg:(border(l-0 t gray-400) rounded-b-none rounded-r)
        `}
      >
        <div class={tw`mb-8`}>
          <div class={tw`text-gray-900 font-bold text-xl mb-2`}>
            {props.title}
          </div>
          <p class={tw`text-gray-700 text-base`}>{props.description}</p>
        </div>
      </div>
    </div>
  )
}
