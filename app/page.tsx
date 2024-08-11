import Encryption from '@/components/main/Encryption'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import Clients from '@/components/main/Clients'
import CarouselSection from '@/components/main/CarouselSection'

export default function Home() {
  return (
    <main className='h-full w-full' >
      <div className="flex flex-col gap-20">
        <Hero />
        <Encryption/>
        <Projects/>
        <Clients/>
        <CarouselSection/>
      </div>
    </main>
  )
}
