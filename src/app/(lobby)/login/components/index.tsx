'use client'

import useAdministrator from '@/app/hooks/administrator'
import { useAuthContext } from '@/app/hooks/auth'
import { Icons } from '@/components/icons'
import { PasswordInput } from '@/components/password-input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { graphqlRequestClient } from '@/lib/graphql.request'
import { SigninSchema } from '@/lib/schemas/signin.schema'
import { SigninData } from '@/lib/types/signin.type'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const FormLogin = () => {
  const requestClient = graphqlRequestClient()

  const router = useRouter()
  const { signIn } = useAuthContext()
  const { refetch: refetchActiveAdministrator } = useAdministrator()

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<SigninData>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      username: '',
      password: '',
      rememberMe: false,
    },
  })

  const handleLogin = async (data: SigninData) => {
    setIsLoading(true)
    const { username, password } = data

    const result = await signIn(username, password)

    if (result?.status) {
      toast.success(result.message)
      refetchActiveAdministrator()
      return router.push('/dashboard/')
    } else {
      toast.error('Credenciais inválidas')
      setIsLoading(false)
    }
  }

  useEffect(() => {
    form.setFocus('username')
  }, [form])

  return (
    <Form {...form}>
      <form
        onSubmit={(...args) => void form.handleSubmit(handleLogin)(...args)}
        className="space-y-5 dark:text-white"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal tracking-wider">
                E-mail
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <span className="absolute -translate-y-1/2 start-4 top-1/2">
                    <Icons.mail className="w-4 h-4 text-black-60 dark:text-black-10" />
                  </span>
                  <Input
                    variant="icons"
                    autoComplete="off"
                    type="text"
                    placeholder="seuemail@exemplo.com"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal tracking-wider">
                Senha
              </FormLabel>
              <FormControl>
                <PasswordInput
                  variant="icons"
                  placeholder="**********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rememberMe"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1  leading-none font-normal">
                <FormLabel>Lembrar-me</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="primary"
          className={`flex items-center w-full gap-1  `}
        >
          {isLoading && (
            <Icons.spinner className="animate-spin w-5 h-5 text-white" />
          )}
          {isLoading ? 'ENTRANDO' : 'ENTRAR'}
        </Button>
      </form>
    </Form>
  )
}
