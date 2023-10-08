import Link from 'next/link'

export default function Presentation() {
  return (
    <main>
      <h1>Presentation</h1>

      <div className="mt-10 flex items-center justify-center gap-2">
        <Link href="/sign-in">sign-in</Link>
        <Link href="/sign-up">sign-up</Link>
      </div>
    </main>
  )
}
