import { Separator } from '@/components/Separator';
import { SocialButton } from '@/components/SocialButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';

export default function SignIn() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="py-4 px-10 flex flex-col items-center justify-between">
        <header className="flex w-full items-center justify-between">
          <Image src="/default-logo.svg" alt="" width={78} height={30} />

          <Link href="/sign-up" className="text-sm text-purple-700 hover:underline">Crie sua conta</Link>
        </header>

        <div className="w-96">
          <div className="text-center w-[352px]">
            <h1 className="font-semibold text-[28px] text-zinc-900">Acesse a plataforma</h1>
            <p className="block mt-2 text-zinc-500 font-sm">Faça login ou registre-se para criar as suas anotações ainda hoje.</p>
          </div>

          <form className="mt-6 space-y-4">
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="name@example.com" className="focus:transition-shadow" />
            </div>

            <div>
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="example password" className="focus:transition-shadow" />
            </div>

            <Button className="w-full bg-purple-700 hover:bg-purple-800">Entrar</Button>
          </form>

          <Separator />

          <div className="mt-6 flex items-center justify-center gap-4">
            <SocialButton>
              <Image src="/github-icon.svg" alt="" width={20} height={20} />
            </SocialButton>

            <SocialButton>
              <Image src="/google-icon.svg" alt="" width={20} height={20} />
            </SocialButton>

            <SocialButton>
              <Image src="/x-icon.svg" alt="" width={20} height={20} />
            </SocialButton>
          </div>

          <span className="text-center text-xs text-zinc-900 block mt-6">
            Ao continuar, você concorda com nossos Termos de Serviço e Política de Privacidade.
          </span>
        </div>

        <footer className="text-center">
          <span className="font-medium text-xs text-zinc-300">
            &copy; 2023 Zen. Todos os direitos reservados.
          </span>
        </footer>
      </div>

      <div className="bg-zinc-950 flex items-center justify-center">
        <Image src="/white-logo-lg.svg" alt="" width={156} height={60} />
      </div>
    </main>
  )
}
