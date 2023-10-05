import { Checkbox } from '@/components/ui/checkbox';
import { Trash2 } from 'lucide-react';

export function Task() {
  return (
    <li className="h-14 rounded-[8px] bg-zinc-100 flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <Checkbox 
          className="border-[3px] rounded-full h-6 w-6" 
        />

        <p>Ir ao supermercado</p>
      </div>

      <button className="group">
        <Trash2 className="h-5 w-5 stroke-zinc-400 group-hover:stroke-purple-700" />
      </button>
    </li>
  )
}