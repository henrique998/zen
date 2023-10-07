'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const signInFormValidationSchema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
})

type SignInFormData = zod.infer<typeof signInFormValidationSchema>

export function SignInForm() {
  const { register, handleSubmit } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormValidationSchema),
  })

  async function handleSignIn({ email, password }: SignInFormData) {
    console.log({ email, password })
  }

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className="mt-6 space-y-4">
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