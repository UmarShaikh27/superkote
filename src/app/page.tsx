import Image from 'next/image'
import Carousel from './components/Carousel'
import Maincards from './components/Maincards'

export default async function Home() {

  return (
   <>

      <Carousel/>
      <Maincards/>
      
   </>
  )
}
