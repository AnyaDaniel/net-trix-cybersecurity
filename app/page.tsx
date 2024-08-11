import Encryption from '@/components/main/Encryption'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import Clients from '@/components/main/Clients'
import CarouselSection from '@/components/main/CarouselSection'
import Solution from '@/components/main/Solution'

export default function Home() {
  return (
    <main className='h-full w-full' >
      <div className="flex flex-col gap-20">
        <Hero />
        <Projects/>
        <Encryption/>
        <Solution/>
        <Clients/>
        <CarouselSection/>
      </div>
    </main>
  )
}
