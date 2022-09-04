/** @jsx h */
import { h } from 'preact'
import { tw } from '@twind'

// ISLANDS
import Navbar from '../islands/Navbar.tsx'
import InstagramEmbeded from '../islands/InstagramEmbeded.tsx'
import SearchBox from '../islands/SearchBox.tsx'
// COMPONENTS
import Footer from '../components/molecules/Footer.tsx'
import Headline from '../components/atoms/Headline.tsx'

export default function Dogs() {
  return (
    <div>
      <Navbar />
      <div class={tw`container mx-auto`}>
        <Headline title="Psy poszukujące domu"></Headline>
        <SearchBox></SearchBox>
      </div>
    </div>
  )
}
