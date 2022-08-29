/** @jsx h */
import { h } from 'preact'
import { tw } from '@twind'
import { db } from '../main.ts'

// ISLANDS
import Navbar from '../islands/Navbar.tsx'
import InstagramCarousel from '../islands/InstagramEmbeded.tsx'

// COMPONENTS
import TheTheader from '../components/organisms/TheHeader.tsx'
import Card from '../components/molecules/Card.tsx'
import HorizontalLine from '../components/molecules/HorizontalLine.tsx'

export default function Home() {
  // unknown to string
  // https://www.becomebetterprogrammer.com/typescript-unknown-guide/
  const [mainCard1Row] = db.query(
    "SELECT * FROM Sections WHERE name='mainCard1'"
  )
  const mainCard1: string[] = mainCard1Row as string[]
  const [mainCard2Row] = db.query(
    "SELECT * FROM Sections WHERE name='mainCard2'"
  )
  const mainCard2: string[] = mainCard2Row as string[]

  return (
    <div>
      <Navbar />
      <div class={tw`container mx-auto`}>
        <TheTheader />
        <Card title={mainCard1[2]} description={mainCard1[3]} />
        <Card title={mainCard2[2]} description={mainCard2[3]} reverse={true} />
        <HorizontalLine></HorizontalLine>

        <InstagramCarousel url="ChCsu_VjpKu"></InstagramCarousel>

          <HorizontalLine></HorizontalLine>
      </div>
    </div>
  )
}
