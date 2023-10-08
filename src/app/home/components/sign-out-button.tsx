'use client'

import { useClerk } from '@clerk/nextjs'
import { Power } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function SignOutButton() {
  const { signOut } = useClerk()

  const router = useRouter()

  async function handleSignOut() {
    await signOut()

    router.push('/')
  }

  return (
    <button
      onClick={handleSignOut} 
      className="w-full flex items-center gap-[10px] p-3 hover:bg-zinc-50 transition-colors"
    >
      <Power className="h-5 w-5 stroke-zinc-400" />

      <span className="text-zinc-400 text-sm">Sair</span>
    </button>
  )
}