/** @jsx h */
import { h } from 'preact'
import { tw } from '@twind'
import Navbar from '../islands/Navbar.tsx'
import TheTheader from '../components/organisms/TheHeader.tsx'
import Card from '../components/molecules/Card.tsx'
import { db } from '../main.ts'

export default function Home() {
  const mainText = db.query(
    "SELECT description FROM Sections WHERE name='mainText'"
  )

  return (
    <div>
      <Navbar />
      <div class={tw`container mx-auto`}>
        <TheTheader />
        <Card title="go hard" description="go home" />

        <p>{mainText}</p>
      </div>
    </div>
  )
}
