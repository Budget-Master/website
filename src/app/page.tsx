'use client'
import BusinessIcon from '@/assets/images/login/BusinessIcon'
import { SignInForm } from '@/components/SignInForm'

export default function Home() {
  return (
    <main className="m-auto flex h-screen w-5/6 items-center justify-between gap-32 2xl:w-4/6">
      <section className="flex h-[600px] w-full flex-col items-center gap-6">
        <div className="w-full">
          <BusinessIcon />
        </div>
        <p className="text-base font-bold">
          Acesse sua conta Budget Master e gerencie suas finanças de maneira
          fácil e prática.
        </p>
      </section>
      <section className="flex h-[600px] w-full flex-col items-center justify-center gap-6">
        <SignInForm />
      </section>
    </main>
  )
}
