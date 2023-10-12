'use client'

import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export function PresentationHeader() {
  const { isSignedIn } = useUser()

  return (
    <header className="w-full px-4 h-[80px]">
      <div className="max-w-5xl h-full w-full mx-auto flex items-center justify-between">
        <Image src="/default-logo.svg" alt="" width={78} height={30} />

        {isSignedIn ? (
          <Button asChild className="bg-purple-700 hover:bg-purple-800">
            <Link href="/home">Home</Link>
          </Button>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <Button asChild>
              <Link href="/sign-in">Sign-in</Link>
            </Button>

            <Button asChild className="bg-purple-700 hover:bg-purple-800">
              <Link href="/sign-up">Sign-up</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}