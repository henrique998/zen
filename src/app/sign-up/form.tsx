import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


export function SignUpForm() {
  return (
    <form className="mt-6 space-y-4">
      <div>
        <Label htmlFor="name">Nome</Label>

        <Input 
          id="name" 
          placeholder="jhon doe" 
          className="focus:transition-shadow" 
        />
      </div>
      
      <div>
        <Label htmlFor="email">E-mail</Label>

        <Input 
          id="email" 
          type="email" 
          placeholder="name@example.com" 
          className="focus:transition-shadow" 
        />
      </div>

      <div>
        <Label htmlFor="password">Senha</Label>

        <Input 
          id="password" 
          type="password" 
          placeholder="example password" 
          className="focus:transition-shadow" 
        />
      </div>

      <Button className="w-full bg-purple-700 hover:bg-purple-800">
        Entrar
      </Button>
    </form>
  )
}