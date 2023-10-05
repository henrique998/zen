import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-zinc-950 h-[200px]">
      <div className="py-12 max-w-5xl w-full mx-auto flex items-center justify-between">
        <Image src="/default-logo-white.svg" alt="" width={78} height={30} />

        <Avatar>
          <AvatarImage 
            src="https://github.com/henrique998.png" 
          />
          <AvatarFallback>JD</AvatarFallback> 
        </Avatar>
      </div>
    </header>
  )
}