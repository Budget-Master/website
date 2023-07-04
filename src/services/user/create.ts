interface CreateInterface {
  name: string
  email: string
  subscription: string
  cpf_cnpj: string
  cep: string
  password: string
  avatar_url?: string
}

export function Create(data: CreateInterface) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 2000)
  })
}
