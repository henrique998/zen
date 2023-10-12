import { Footer } from '@/components/footer'
import { PresentationHeader } from '@/components/presentation-header'
import Image from 'next/image'

export default function Presentation() {
  return (
    <main className="w-full min-h-screen pb-4 flex flex-col items-center justify-between">
      <PresentationHeader />

      <div className="flex flex-col items-center justify-center">
        <Image src="/black-logo-lg.svg" alt="" width={156} height={60} />

        <h1 className="text-3xl font-semibold text-zinc-950">Zen</h1>
      </div>

      <Footer />
    </main>
  )
}
