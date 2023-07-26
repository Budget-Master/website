import NotFoundImage from '@/assets/images/not-found/not-found'

export default function NotFound() {
  return (
    <main className="flex h-screen w-full justify-between">
      <section className="flex h-full w-1/2 flex-col items-center justify-center bg-project-gray-700 font-bold text-project-gray-100">
        <div className="flex h-2/3 flex-col items-center justify-between">
          <div className="flex flex-col items-center gap-7">
            <h1 className="text-center text-5xl">
              Desculpe, não achamos a página solicitada
            </h1>
            <NotFoundImage />
          </div>
          <p className="text-center text-base">
            Se você acha que isso é um erro, entre em contato conosco no e-mail:
            <br />
            <span className="text-project-green-200">
              contato.budgetmaster@gmail.com
            </span>
          </p>
        </div>
      </section>
      <section className="flex h-full w-1/2 flex-col items-center justify-center bg-project-gray-100"></section>
    </main>
  )
}
