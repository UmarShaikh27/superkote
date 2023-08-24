import Image from 'next/image'
import Carousel from './components/Carousel'
import Maincards from './components/Maincards'
import InfoArea from './components/InfoArea'


export default async function Home() {

  return (
   <>

      <Carousel/>
      <Maincards/>
      <InfoArea/>
      
      
   </>
  )
}
