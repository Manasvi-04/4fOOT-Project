import Banner from '@/components/Banner'
import DisplayCard from '@/components/Displaycard'
import Slides from '@/components/Slides'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>
    <Banner />
    <DisplayCard />
    <Slides />
      </div>
    </main>
  )
}