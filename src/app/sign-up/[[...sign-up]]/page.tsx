import { BrandBg } from '@/components/brand-bg'
import { Footer } from '@/components/footer'
import { Separator } from '@/components/separator'
import { ButtonsBox } from '../buttons-box'
import { SignUpForm } from '../form'
import { SignUpHeader } from '../header'

export default function SignUp() {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-2">
      <BrandBg />

      <div className="py-4 px-10 flex flex-col items-center justify-between">
        <SignUpHeader />

        <div className="w-96 px-4 mt-6 lg:mt-0">
          <div className="text-center w-[352px]">
            <h1 className="font-semibold text-[28px] text-zinc-900">
              Crie sua conta
            </h1>

            <p className="block mt-2 text-zinc-500 font-sm">
              Aproveite a plataforma após criar sua conta.
            </p>
          </div>

          <SignUpForm />

          <Separator />

          <ButtonsBox />

          <span className="text-center text-xs text-zinc-900 block mt-6">
            Ao continuar, você concorda com nossos Termos de Serviço e Política de Privacidade.
          </span>
        </div>

        <div className="mt-10 lg:mt-0">
          <Footer />
        </div>
      </div>
    </main>
  )
}
