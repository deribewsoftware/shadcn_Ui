import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'

export default function Home() {
  return (
   
   <main className='flex justify-center w-full'>
   <Carousel
      // opts={{
      //   align: "start",
      // }}
      className="w-[90%] "
    >
      <CarouselContent className='flex justify-center'>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1 h-72 w-64 bg-teal-700">
              <h1 className='text-3xl font-bold'>{index+1} Card</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

   </main>
  )
}
