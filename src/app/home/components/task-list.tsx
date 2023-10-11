'use client'

import { useTodosStore } from '@/store/todos-store'
import { useAuth } from '@clerk/nextjs'
import { useEffect } from 'react'
import { Task } from './task'

export function TaskList() {
  const { userId, getToken } = useAuth()
  const [todos, loadTodos] = useTodosStore(state => [state.todos, state.loadTodos])

  useEffect(() => {
    async function setupTodos() {
      const token = await getToken({ template: 'supabase' })

      if (!token || !userId) return; 

      loadTodos(userId, token)
    }

    setupTodos()
  }, [])

  return (
    <ul className="mt-16 max-w-[696px] w-full mx-auto space-y-4">
      {todos?.map(todo => (
        <Task 
          key={todo.id} 
          id={todo.id} 
          content={todo.content} 
          isCompleted={todo.isCompleted} 
        />
      ))}
    </ul>
  )
}