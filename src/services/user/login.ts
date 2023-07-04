interface SignInInterface {
  email: string
  password: string
}

export function SignIn(data: SignInInterface) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}
