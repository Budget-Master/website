import { SignIn } from '@/services/user/login'
import { showErrorNotification, showSuccessNotification } from '@/utils/alert'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from '../Form'

export function SignInForm() {
  const [loading, setLoading] = useState(false)

  const signInSchema = z.object({
    email: z
      .string()
      .nonempty('O e-mail é obrigatório')
      .email('Formato de e-mail inválido')
      .toLowerCase(),

    password: z
      .string()
      .nonempty('A senha é obrigatória')
      .min(6, 'A senha precisa ter no mínimo 6 caracteres'),
  })

  type SignInFormData = z.infer<typeof signInSchema>

  const signInForm = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  })

  async function signIn(data: SignInFormData) {
    toggleLoading(true)
    try {
      await SignIn(data)
      showSuccessNotification('Sucesso!', `Login efetuado com sucesso!`)
    } catch (error) {
      showErrorNotification('Erro', `Erro ao efetuar o login.`)
    } finally {
      toggleLoading(false)
    }
  }

  function toggleLoading(value: boolean) {
    setLoading(value)
  }

  const { handleSubmit } = signInForm

  const inputStyle =
    'rounded-xl border-0 bg-project-gray-700 px-6 py-5 text-base font-bold text-project-green-200 shadow-none placeholder:text-project-green-200'
  return (
    <FormProvider {...signInForm}>
      <form
        onSubmit={handleSubmit(signIn)}
        className="flex w-full flex-col gap-6"
      >
        <Form.Field>
          <Form.Input
            name="email"
            placeholder="Digite seu e-mail"
            className={inputStyle}
          />
          <Form.ErrorMessage field="email" />
        </Form.Field>

        <Form.Field>
          <Form.Input
            name="password"
            type="password"
            min={6}
            placeholder="Digite sua Senha"
            className={inputStyle}
          />
          <Form.ErrorMessage field="password" />
        </Form.Field>

        <button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
        </button>
      </form>
    </FormProvider>
  )
}
