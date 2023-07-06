import { fireEvent, render, waitFor } from '@testing-library/react'
import { SignInForm } from './index'

jest.mock('@/utils/alert', () => ({
  showSuccessNotification: jest.fn(),
}))

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
    const { queryByText, getByPlaceholderText, getByText } = render(
      <SignInForm />,
    )
    const emailInput = getByPlaceholderText('Digite seu e-mail')
    const passwordInput = getByPlaceholderText('Digite sua senha')
    const button = getByText('Entrar')

    fireEvent.click(button)

    await waitFor(() => {
      expect(queryByText('O e-mail é obrigatório')).toBeInTheDocument()
      expect(queryByText('A senha é obrigatória')).toBeInTheDocument()
    })

    fireEvent.change(passwordInput, { target: { value: 'pass' } })
    fireEvent.change(emailInput, { target: { value: 'test' } })

    await waitFor(() => {
      expect(queryByText('Formato de e-mail inválido')).toBeInTheDocument()
      expect(
        queryByText('A senha precisa ter no mínimo 6 caracteres'),
      ).toBeInTheDocument()
    })
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
