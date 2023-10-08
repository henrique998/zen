'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useSignUp } from '@clerk/nextjs';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

const signUpFormValidationSchema = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
})

type SignUpFormData = zod.infer<typeof signUpFormValidationSchema>

export function SignUpForm() {
  const [isPending, setIsPending] = useState(false)
  const [code, setCode] = useState('')
  const { register, handleSubmit } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormValidationSchema),
  })
  const { signUp, isLoaded, setActive } = useSignUp()
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const router = useRouter()

  async function handleSignUp({ name, email, password }: SignUpFormData) {
    if (!isLoaded) {
      return
    }

    try {
      await signUp.create({
        firstName: name,
        emailAddress: email,
        password,
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      setIsPending(true)
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Auth Error',
        description: err.errors[0].longMessage,
      })
    }
  }

  async function handleVerifyCode(e: FormEvent) {
    e.preventDefault()

    if (!isLoaded) {
      return;
    }

    try {
      setIsLoading(true)

      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId })
        
        router.push('/home')
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  }

  return (
    <>
      {isPending ? (
        <form onSubmit={handleVerifyCode} className="mt-6 space-y-4">
          <div>
            <Label htmlFor="cod">Código de confirmação</Label>

            <Input 
              id="code" 
              placeholder="type your confirmation code"
              value={code}
              onChange={e => setCode(e.target.value)}
              className="focus:transition-shadow" 
            />
          </div>

          <Button className="w-full bg-purple-700 hover:bg-purple-800">
            Verificar email
          </Button>
        </form>
    ) : (
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

          <Button 
            disabled={isLoading} 
            className="w-full bg-purple-700 hover:bg-purple-800"
          >
            {isLoading ? (
              <Loader2 className="h-6 w-6 stroke-white animate-spin" />
            ) : 'Criar conta'}
          </Button>
        </form>
    )}
    </>
  )
}