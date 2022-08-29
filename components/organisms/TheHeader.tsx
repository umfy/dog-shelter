/** @jsx h */
import { h } from 'preact'
import { tw } from '@twind'

export default function TheTheader() {
  return (
    <div class={tw`text-8xl font-bold flex flex(wrap col)`}>
      <p class={tw`text-gray-700 mx-auto pr-[20%] my-8`}>Accumsan</p>
      <div style="position: relative;">
        <div style="position: absolute; width: 120%; border:3px solid red; left: -10%"></div>
        <div style="position: absolute; width: 50px; height: 80px; border:3px solid red; background-color: red; bottom: 0; right: calc(30% - 130px)"></div>
      </div>
      <p class={tw`text-gray-500 mx-auto pl-[5%] my-8`}>Magna</p>
    </div>
  )
}
