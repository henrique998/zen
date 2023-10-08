import { Separator } from '@/components/ui/separator'
import { TaskList } from './components/TaskList'
import { Form } from './components/form'
import { Header } from './components/header'

export default function Home() {
  return (
    <div className="pb-12">
      <Header />

      <Form />

      <div className="max-w-[696px] mx-auto mt-16 flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <strong className="font-medium text-zinc-900">Tarefas criadas</strong>
          <span 
            className="text-sm font-medium text-zinc-900 bg-zinc-100 px-[10px] h-5 w-6 rounded-[20px] flex items-center justify-center"
          >0</span>
        </div>

        <div className="flex items-center gap-2">
          <strong className="font-medium text-purple-700">Concluídas</strong>
          <span className="text-sm font-medium text-zinc-900 bg-zinc-100 px-[10px] h-5 w-6 rounded-[20px] flex items-center justify-center">0</span>
        </div>
      </div>

      <Separator className="w-[696px] mx-auto" />

      {/* <EmptyTasksBox /> */}
      <TaskList />
    </div>
  )
}