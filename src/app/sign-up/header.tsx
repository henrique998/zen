import Image from 'next/image';
import Link from 'next/link';

export function SignUpHeader() {
  return (
    <header className="flex w-full items-center justify-between">
      <Link 
        href="/" 
        className="text-sm text-purple-700 hover:underline"
      >
        Entre na sua conta
      </Link>

      <Image src="/default-logo.svg" alt="" width={78} height={30} />
    </header>
  )
}