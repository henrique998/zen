import { Separator } from '@/components/ui/separator'
import { Form } from './components/form'
import { Header } from './components/header'
import { Statistics } from './components/statistics'
import { TodoList } from './components/todo-list'

export default function Home() {
  return (
    <main className="pb-12">
      <Header />

      <div className="px-4">
        <Form />

        <Statistics />

        <Separator className="w-[696px] mx-auto" />

        <TodoList />
      </div>
    </main>
  )
}