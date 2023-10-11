'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { supabaseClient } from '@/lib/supabase'
import { useTodosStore } from '@/store/todos-store'
import { useAuth } from '@clerk/nextjs'
import { PlusCircle } from 'lucide-react'

const taskFormValidationSchema = zod.object({
  task: zod.string(),
})

type TaskFormData = zod.infer<typeof taskFormValidationSchema>

export function Form() {
  const { register, handleSubmit, reset } = useForm<TaskFormData>({
    resolver: zodResolver(taskFormValidationSchema),
  })

  const { toast } = useToast()

  const { userId, getToken } = useAuth()
  const loadTodos = useTodosStore(state => state.loadTodos)

  async function handleCreateTask({ task }: TaskFormData) {
    const token = await getToken({ template: 'supabase' })

      if (!token) return; 

      const supabase = await supabaseClient(token)

      const { error } = await supabase.from('todos').insert({
        'content': task,
        'user_id': userId
      })

      if (error) {
        toast({
          variant: 'destructive',
          title: 'error adding task',
          description: error.message
        })

        return;
      }

      reset()
      await loadTodos(userId!, token)
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateTask)}
      className="flex items-center justify-center gap-4 max-w-[696px] mx-auto -mt-5"
    >
      <Input 
        placeholder="Digite uma tarefa para realizar"
        {...register('task')}
        className="bg-zinc-900 placeholder:text-zinc-500 border border-zinc-500 focus:border-purple-700 text-zinc-100"
      />

      <Button className="bg-purple-700 hover:bg-purple-800 space-x-[10px]">
        <span>Adicionar</span> <PlusCircle className="h-5 w-5 stroke-white" />
      </Button>
    </form>
  )
}