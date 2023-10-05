import { Task } from './Task';

export function TaskList() {
  return (
    <ul className="mt-16 max-w-[696px] w-full mx-auto space-y-4">
      <Task />
      <Task />
      <Task />
      <Task />
    </ul>
  )
}