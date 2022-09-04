/** @jsx h */
import { h } from 'preact'
import { tw } from '@twind'

export default function InfoBar(props: { title: string }) {
  return (
    <div
      class={tw`flex items-center justify-center mx-auto h-24 my-12 w-2/5 min-w-[32rem] rounded-lg 
      bg-gray-700 text(4xl red-500) 
      hover:(cursor-pointer bg-gray-600 text-red-400)`}
    >
      <div class={tw`p-4`}>{props.title}</div>
    </div>
  )
}
