import { fireEvent, render } from '@testing-library/react'
import { SignInForm } from './index'

describe('SignInForm Component', () => {
  it('should render sign in form correctly', () => {
    const { getByPlaceholderText, getByText } = render(<SignInForm />)
    const emailInput = getByPlaceholderText('Digite seu e-mail')
    const passwordInput = getByPlaceholderText('Digite sua senha')
    const button = getByText('Entrar')

    expect(emailInput).toBeTruthy()
    expect(passwordInput).toBeTruthy()
    expect(button).toBeTruthy()
  })

  it('should be errors rendered correctly', async () => {
    const { findByText, getByPlaceholderText, getByText } = render(
      <SignInForm />,
    )
    const emailInput = getByPlaceholderText('Digite seu e-mail')
    const passwordInput = getByPlaceholderText('Digite sua senha')
    const button = getByText('Entrar')

    fireEvent.click(button)

    expect(await findByText('O e-mail é obrigatório')).toBeInTheDocument()
    expect(await findByText('A senha é obrigatória')).toBeInTheDocument()

    fireEvent.change(passwordInput, { target: { value: 'pass' } })
    fireEvent.change(emailInput, { target: { value: 'test' } })

    expect(await findByText('Formato de e-mail inválido')).toBeInTheDocument()
    expect(
      await findByText('A senha precisa ter no mínimo 6 caracteres'),
    ).toBeInTheDocument()
  })

  it('should submit the form correctly', async () => {
    const { getByPlaceholderText, getByText } = render(<SignInForm />)
    const emailInput = getByPlaceholderText('Digite seu e-mail')
    const passwordInput = getByPlaceholderText('Digite sua senha')
    const button = getByText('Entrar')

    fireEvent.change(emailInput, { target: { value: 'teste@teste.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password' } })
    fireEvent.click(button)
  })
})
