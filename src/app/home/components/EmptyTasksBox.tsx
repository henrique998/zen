import { ClipboardList } from 'lucide-react';

export function EmptyTasksBox() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-16">
      <ClipboardList className="h-20 w-20 stroke-zinc-200 stroke-2" />

      <div className="text-center space-y-[4px]">
        <h2 className="text-zinc-300 font-medium">Você ainda não têm tarefas cadastradas</h2>

        <h3 className="text-zinc-200 font-medium">Crie e organize suas tarefas</h3>
      </div>
    </div>
  )
}