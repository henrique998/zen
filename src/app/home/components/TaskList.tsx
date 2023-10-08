'use client'

import { supabaseClient } from '@/lib/supabase'
import { useAuth } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import { Task } from './Task'

type Tables = 'todos'

type Todo = {
  id: number
  content: string
  isCompleted: boolean 
}

export function TaskList() {
  const { userId, getToken } = useAuth()
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    async function loadTodos() {
      const token = await getToken({ template: 'supabase' })

      if (!token) return; 

      const supabase = await supabaseClient(token)

      const { data } = await supabase.from('todos').select('*').eq('user_id', userId).order('created_at', { ascending: false })
      const todosData = data as Todo[]

      setTodos(todosData)
    }  

    loadTodos()
  }, [])

  return (
    <ul className="mt-16 max-w-[696px] w-full mx-auto space-y-4">
      {todos.map(todo => (
        <Task 
          key={todo.id} 
          content={todo.content} 
          isCompleted={todo.isCompleted} 
        />
      ))}
    </ul>
  )
}