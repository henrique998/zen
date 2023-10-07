'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const signUpFormValidationSchema = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
})

type SignUpFormData = zod.infer<typeof signUpFormValidationSchema>

export function SignUpForm() {
  const { register, handleSubmit } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormValidationSchema),
  })

  async function handleSignUp({ name, email, password }: SignUpFormData) {
    console.log({ name, email, password })
  }

  return (
    <form onSubmit={handleSubmit(handleSignUp)} className="mt-6 space-y-4">
      <div>
        <Label htmlFor="name">Nome</Label>

        <Input 
          id="name" 
          placeholder="jhon doe"
          {...register('name')}
          className="focus:transition-shadow" 
        />
      </div>
      
      <div>
        <Label htmlFor="email">E-mail</Label>

        <Input 
          id="email" 
          type="email" 
          placeholder="name@example.com"
          {...register('email')}
          className="focus:transition-shadow" 
        />
      </div>

      <div>
        <Label htmlFor="password">Senha</Label>

        <Input 
          id="password" 
          type="password" 
          placeholder="example password"
          {...register('password')}
          className="focus:transition-shadow" 
        />
      </div>

      <Button className="w-full bg-purple-700 hover:bg-purple-800">
        Entrar
      </Button>
    </form>
  )
}