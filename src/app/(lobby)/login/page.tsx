'use client'

import Theme from '@/components/theme'
import Image from 'next/image'
import { FormLogin } from './components'

const Login = () => {
  return (
    <section className=" bg-[#fbfbfb] flex flex-col justify-center h-screen dark:bg-black">
      <main className="flex flex-row justify-center items-center gap-32">
        <section className="shadow-[0_0px_20px_-10px] shadow-black-10 rounded-md w-[550px] p-6 dark:shadow-black-60 dark:border-black-60 border border-black-10">
          <header className="flex flex-row items-center justify-between">
            <Image
              src="/gseller_logo_full.png"
              alt="Logo da Gseller"
              width={200}
              height={200}
            />
            <Theme />
          </header>
          <h1 className="text-xl my-4 font-bold leading-tight tracking-tight text-black-80 md:text-2xl dark:text-white">
            Bem-vindo (a)
          </h1>
          <p className="text-base dark:text-black-10 text-black-50 font-light tracking-wide mb-4">
            Entre com seu e-mail e senha para acessar a plataforma.
          </p>
          <FormLogin />
        </section>
      </main>
    </section>
  )
}

export default Login
