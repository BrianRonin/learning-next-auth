import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  callBackFormLogin0Props,
  FormLogin0,
} from '../components/FORM/form_login_0/form_login_0'
import { S_ContainerOne } from '../components/ONLY_STYLES/CONTAINERS/container_one/S.container_one'
import { Base } from '../templates/Base/Base'

export default function LoginPage() {
  const [error, setError] = useState('')
  const router = useRouter()
  const handleLogin = async ({
    email,
    password,
  }: callBackFormLogin0Props) => {
    if (!email || !password) {
      return setError('preencha os campos')
    }
    const response = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })
    if (!response?.ok) {
      setError('Credenciais invalida')
    }
    const redirect = router.query?.redirect || '/'
    router.push(redirect as string)
  }

  return (
    <Base>
      <S_ContainerOne>
        <FormLogin0
          onLogin={handleLogin}
          errorMesage={error}
        />
      </S_ContainerOne>
    </Base>
  )
}
