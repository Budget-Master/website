'use client'
import BusinessIcon from '@/assets/images/login/BusinessIcon'
import { SignInForm } from '@/components/SignInForm'

export default function Home() {
  return (
    <main className="m-auto flex h-screen w-4/6 items-center justify-between gap-32">
      <section className="flex h-[600px] w-full flex-col items-center gap-6">
        <BusinessIcon />
        <p className="text-base font-bold">
          Acesse sua conta Budget Master e gerencie suas finanças de maneira
          fácil e prática.
        </p>
      </section>
      <section className="flex h-[600px] w-full flex-col gap-6">
        <SignInForm />
      </section>
    </main>
  )
}
