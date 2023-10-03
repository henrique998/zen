import { Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col gap-2 min-h-screen">
      <h1>Home</h1>

      <button>
        Click me <Star />
      </button>
    </div>
  )
}
