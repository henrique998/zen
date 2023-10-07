import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Power } from 'lucide-react';
import Image from 'next/image';
import { Avatar } from './Avatar';
import { UpdateProfileContent } from './update-profile-content';

export function Header() {
  return (
    <header className="bg-zinc-950 h-[200px]">
      <div className="py-12 max-w-5xl w-full mx-auto flex items-center justify-between">
        <Image src="/default-logo-white.svg" alt="" width={78} height={30} />

        <Popover>
          <PopoverTrigger>
            <Avatar  />
          </PopoverTrigger>

          <PopoverContent className="w-56 mt-2 p-0">
            <div className="h-10 flex items-center px-3 border-b border-b-zinc-200">
              <h2 className="font-medium text-sm text-zinc-900">Minha Conta</h2>
            </div>

            <UpdateProfileContent />

            <button className="w-full flex items-center gap-[10px] p-3 hover:bg-zinc-50 transition-colors">
              <Power className="h-5 w-5 stroke-zinc-400" />

              <span className="text-zinc-400 text-sm">Sair</span>
            </button>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}