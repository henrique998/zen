import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function SignInForm() {
  return (
    <form className="mt-6 space-y-4">
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