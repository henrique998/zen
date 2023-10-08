'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { useSignIn } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

const signInFormValidationSchema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
})

type SignInFormData = zod.infer<typeof signInFormValidationSchema>

export function SignInForm() {
  const { toast } = useToast()
  const { register, handleSubmit } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormValidationSchema),
  })
  const { isLoaded, signIn, setActive } = useSignIn()
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  async function handleSignIn({ email, password }: SignInFormData) {
    if (!isLoaded) {
      return
    }

    try {
      setIsLoading(true)

      const { status, createdSessionId } = await signIn.create({
        identifier: email,
        password
      })

      if (status === 'complete') {
        await setActive({ session: createdSessionId })

        router.push('/home')
      } else {
        console.log({ status })
      }
    } catch (err: any) {
      setIsLoading(false)

      toast({
        variant: 'destructive',
        title: 'Auth Error',
        description: err.errors[0].longMessage,
      })
    }
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

      <Button 
        disabled={isLoading} 
        className="w-full bg-purple-700 hover:bg-purple-800"
      >
        {isLoading ? (
          <Loader2 className="h-6 w-6 stroke-white animate-spin" />
        ) : 'Entrar'}
      </Button>
    </form>
  )
}