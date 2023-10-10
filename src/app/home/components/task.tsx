'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { useToast } from '@/components/ui/use-toast'
import { supabaseClient } from '@/lib/supabase'
import { useAuth } from '@clerk/nextjs'
import { Trash2 } from 'lucide-react'
import { useState } from 'react'

type CheckStates = boolean | 'indeterminate'

interface TaskProps {
  id: number
  content: string
  isCompleted: boolean
}

export function Task({ id, content, isCompleted = false }: TaskProps) {
  const [checked, setChecked] = useState<CheckStates>(isCompleted)
  const { getToken, userId } = useAuth()
  const { toast } = useToast()

  async function handleToggleCheckTask() {
    const token = await getToken({ template: 'supabase' })

    if (!token) return;

    const supabase = supabaseClient(token)

    if (checked) {
      setChecked(false)
      await supabase.from('todos')
      .update({ isCompleted: false })
      .eq('id', id)
    } else {
      setChecked(true)
      await supabase.from('todos')
        .update({ isCompleted: true })
        .eq('id', id)
    }
  }

  
  async function handleDeleteTask() {
    const token = await getToken({ template: 'supabase' })

    if (!token) return;

    const supabase = supabaseClient(token)

    const { data, error } = await supabase.from('todos').delete().eq('id', id)

    if (error) {
      console.log(error)
      toast({
        variant: 'destructive',
        title: 'Auth Error',
        description: error.message,
      })
    }

    if (data) {
      console.log(data)
    }
  }

  return (
    <li className="h-14 rounded-[8px] bg-zinc-100 flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <Checkbox
          defaultChecked={false}
          checked={checked}
          onCheckedChange={handleToggleCheckTask}
          className="border-[3px] rounded-full h-6 w-6" 
        />

        <p 
          data-taskcompleted={checked} 
          className="data-[taskCompleted=true]:line-through data-[taskcompleted=true]:text-zinc-400"
        >{content}</p>
      </div>

      <button onClick={handleDeleteTask} className="group">
        <Trash2 className="h-5 w-5 stroke-zinc-400 group-hover:stroke-purple-700" />
      </button>
    </li>
  )
}