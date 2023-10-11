import { supabaseClient } from '@/lib/supabase'
import { create } from 'zustand'

type Todo = {
  id: number
  content: string
  isCompleted: boolean 
}

interface TodosStore {
  todos: Todo[]
  loadTodos(userId: string, token: string): Promise<void>
}

export const useTodosStore = create<TodosStore>((set) => {
  async function loadTodos(userId: string, token: string) {
    const supabase = supabaseClient(token)

    const { data } = await supabase
      .from('todos')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    const todosData = data as Todo[]

    set(() => ({ todos: todosData }))
  }

  return {
    todos: [],
    loadTodos,
  }
})