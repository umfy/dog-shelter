/** @jsx h */
import { h } from 'preact'
import { tw } from '@twind'

export default function Card() {
  return (
    <div style="position: relative; padding-block: 80px;">
      <div style="position: absolute; width: 80%; border:3px solid red; left: 10%"></div>
    </div>
  )
}
