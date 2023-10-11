'use client'

import { useTodosStore } from '@/store/todos-store'

export function Statistics() {
  const todos = useTodosStore(state => state.todos)
  const todosCompletedCount = todos.filter(todo => todo.isCompleted === true).length

  return (
    <div className="max-w-[696px] mx-auto mt-16 flex items-center justify-between mb-5">
      <div className="flex items-center gap-2">
        <strong className="font-medium text-zinc-900">Tarefas criadas</strong>
        <span 
          className="text-sm font-medium text-zinc-900 bg-zinc-100 px-[10px] h-5 w-6 rounded-[20px] flex items-center justify-center"
        >{todos.length}</span>
      </div>

      <div className="flex items-center gap-2">
        <strong className="font-medium text-purple-700">Concluídas</strong>
        <span className="text-sm font-medium text-zinc-900 bg-zinc-100 px-[10px] h-5 w-6 rounded-[20px] flex items-center justify-center">
          {todosCompletedCount}
        </span>
      </div>
    </div>
  )
}