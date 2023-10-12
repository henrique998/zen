'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { useToast } from '@/components/ui/use-toast'
import { supabaseClient } from '@/lib/supabase'
import { useTodosStore } from '@/store/todos-store'
import { useAuth } from '@clerk/nextjs'
import { Trash2 } from 'lucide-react'
import { useState } from 'react'

type CheckStates = boolean | 'indeterminate'

interface TodoProps {
  id: number
  content: string
  isCompleted: boolean
}

export function Todo({ id, content, isCompleted = false }: TodoProps) {
  const [checked, setChecked] = useState<CheckStates>(isCompleted)
  const { getToken, userId } = useAuth()
  const loadTodos = useTodosStore(state => state.loadTodos)
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

      await loadTodos(userId!, token)
    } else {
      setChecked(true)
      await supabase.from('todos')
        .update({ isCompleted: true })
        .eq('id', id)

        await loadTodos(userId!, token)
    }
  }

  
  async function handleDeleteTask() {
    const token = await getToken({ template: 'supabase' })

    if (!token) return;

    const supabase = supabaseClient(token)

    const { error } = await supabase.from('todos').delete().eq('id', id)

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Auth Error',
        description: error.message,
      })
    }

    await loadTodos(userId!, token)
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