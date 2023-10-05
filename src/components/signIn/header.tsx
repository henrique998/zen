import Image from 'next/image';
import Link from 'next/link';

export function SignInHeader() {
  return (
    <header className="flex w-full items-center justify-between">
      <Image src="/default-logo.svg" alt="" width={78} height={30} />

      <Link 
        href="/sign-up" 
        className="text-sm text-purple-700 hover:underline"
      >
        Crie sua conta
      </Link>
    </header>
  )
}