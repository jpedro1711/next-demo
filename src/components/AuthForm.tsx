'use client'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { loginAction } from '@/hooks/LoginAction'

const schema = z.object({
  email: z.string().email({ message: 'E-mail inválido' }),
  password: z.string().min(6, { message: 'Mínimo 6 caracteres' }),
})

type FormData = z.infer<typeof schema>

export function AuthForm() {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })
  const router = useRouter()

  const onSubmit = async (data: FormData) => {
    console.log(mode.toUpperCase(), data)
    reset()
    toast(`${mode.toLowerCase()} foi realizado com sucesso!`)
    await loginAction()
    router.push('/dashboard')
  }

  return (
    <Tabs
      defaultValue="login"
      className="w-full max-w-md mx-auto mt-10 p-6 border rounded-lg"
      onValueChange={(val: unknown) => setMode(val as 'login' | 'register')}
    >
      <TabsList className="grid w-full grid-cols-2 mb-4">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Cadastro</TabsTrigger>
      </TabsList>

      <TabsContent value="login">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input type="email" placeholder="E-mail" {...register('email')} />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Input
              type="password"
              placeholder="Senha"
              {...register('password')}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
      </TabsContent>

      <TabsContent value="register">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input type="email" placeholder="E-mail" {...register('email')} />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Input
              type="password"
              placeholder="Senha"
              {...register('password')}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Cadastrar
          </Button>
        </form>
      </TabsContent>
    </Tabs>
  )
}
