import { Separator } from '@/components/ui/separator'
import { Form } from './components/form'
import { Header } from './components/header'
import { Statistics } from './components/statistics'
import { TaskList } from './components/task-list'

export default function Home() {
  return (
    <div className="pb-12">
      <Header />

      <Form />

      <Statistics />

      <Separator className="w-[696px] mx-auto" />

      {/* <EmptyTasksBox /> */}
      <TaskList />
    </div>
  )
}