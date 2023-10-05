import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle } from 'lucide-react';

export function Form() {
  return (
    <form 
      className="flex items-center justify-center gap-4 max-w-[696px] mx-auto -mt-5"
    >
      <Input 
        placeholder="Digite uma tarefa para realizar"
        className="bg-zinc-900 placeholder:text-zinc-500 border border-zinc-500 focus:border-purple-700"
      />

      <Button className="bg-purple-700 hover:bg-purple-800 space-x-[10px]">
        <span>Adicionar</span> <PlusCircle className="h-5 w-5 stroke-white" />
      </Button>
    </form>
  )
}