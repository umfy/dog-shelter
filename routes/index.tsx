/** @jsx h */
import { h } from 'preact'
import { tw } from '@twind'
import { db } from '../main.ts'

// ISLANDS
import Navbar from '../islands/Navbar.tsx'
// COMPONENTS
import TheHeader from '../components/organisms/TheHeader.tsx'
import Card from '../components/molecules/Card.tsx'
import HorizontalLine from '../components/atoms/HorizontalLine.tsx'
import Headline from '../components/atoms/Headline.tsx'
import InfoBar from '../components/atoms/InfoBar.tsx'
import Footer from '../components/molecules/Footer.tsx'

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
        <TheHeader />

        <InfoBar title='Poznaj psy szukające domu'></InfoBar>

        <Card title={mainCard1[2]} description={mainCard1[3]} />
        <Card title={mainCard2[2]} description={mainCard2[3]} reverse={true} />

        <HorizontalLine></HorizontalLine>
        <Headline title="Współpraca"></Headline>
        <HorizontalLine></HorizontalLine>
        <Card title={'Karma'} description={mainCard1[3]} />
        <Card title={'Akcesoria'} description={mainCard1[3]} />
        <Card title={'Logistyka'} description={mainCard1[3]} />
        {/* <InstagramEmbeded url="https://www.instagram.com/p/Cc6C1Msr94J/"></InstagramEmbeded> */}

        <HorizontalLine></HorizontalLine>
        <Footer></Footer>
      </div>
    </div>
  )
}
