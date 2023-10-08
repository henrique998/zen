'use client'

import { Checkbox } from '@/components/ui/checkbox';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';

type CheckStates = boolean | 'indeterminate'

interface TaskProps {
  content: string
  isCompleted: boolean
}

export function Task({ content, isCompleted = false }: TaskProps) {
  const [checked, setChecked] = useState<CheckStates>(isCompleted)

  return (
    <li className="h-14 rounded-[8px] bg-zinc-100 flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <Checkbox
          defaultChecked={false}
          checked={checked}
          onCheckedChange={setChecked}
          className="border-[3px] rounded-full h-6 w-6" 
        />

        <p 
          data-taskcompleted={checked} 
          className="data-[taskCompleted=true]:line-through data-[taskcompleted=true]:text-zinc-400"
        >{content}</p>
      </div>

      <button className="group">
        <Trash2 className="h-5 w-5 stroke-zinc-400 group-hover:stroke-purple-700" />
      </button>
    </li>
  )
}