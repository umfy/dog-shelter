/** @jsx h */
import { h } from 'preact'
import { tw } from '@twind'
 
export default function Footer() {
  return (
    <div class={tw`grid grid-cols-3 gap-4 text-center mb-8`}>
    <div >phone and email</div>
    <div>cute dog</div>
    <div>released under the MIT license</div>
  </div>
  )
}
