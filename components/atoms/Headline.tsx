/** @jsx h */
import { h } from 'preact'
import { tw } from '@twind'

export default function Headline(props: { title: string }) {
  return (
      <h1 class={tw`text-5xl text-gray-700 font-bold text-center`}>{props.title}</h1>
  )
}
