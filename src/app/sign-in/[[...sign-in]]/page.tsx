import { Separator } from '@/components/Separator'
import { BrandBg } from '@/components/brandBg'
import { Footer } from '@/components/footer'
import { ButtonsBox } from '../buttonsBox'
import { SignInForm } from '../form'
import { SignInHeader } from '../header'

export default function SignIn() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="py-4 px-10 flex flex-col items-center justify-between">
        <SignInHeader />

        <div className="w-96">
          <div className="text-center w-[352px]">
            <h1 className="font-semibold text-[28px] text-zinc-900">Acesse a plataforma</h1>
            <p className="block mt-2 text-zinc-500 font-sm">Faça login ou registre-se para criar as suas anotações ainda hoje.</p>
          </div>

          <SignInForm />

          <Separator />

          <ButtonsBox />

          <span className="text-center text-xs text-zinc-900 block mt-6">
            Ao continuar, você concorda com nossos Termos de Serviço e Política de Privacidade.
          </span>
        </div>

        <Footer />
      </div>

      <BrandBg />
    </main>
  )
}
