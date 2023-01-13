import {
  signIn,
  useSession,
} from 'next-auth/react'
import { useRouter } from 'next/router'
import {
  useContext,
  useEffect,
  useState,
} from 'react'
import { ButtonWithIcon } from '../../components/BUTTON/button_with_icon/button_with_icon'
import {
  callBackFormLogin0Props,
  FormLogin0,
} from '../../components/FORM/form_login_0/form_login_0'
import { C_Post } from '../../contexts/posts/posts'
import { Base } from '../Base/Base'
import { BsGoogle } from 'react-icons/bs'
import * as S from './S.Login'

export const Login = () => {
  const router = useRouter()
  const [error, setError] = useState(
    router.query.error as string,
  )
  const { setPosts } = useContext(C_Post)
  const { status } = useSession()

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
      if (response?.status === 401) {
        return setError('Credenciais invalida')
      } else {
        return setError('Erro interno X(')
      }
    }
    const redirect = router.query?.redirect || '/'
    router.push(redirect as string)
  }

  const handleLoginGoogle = async () => {
    // router.push(
    //   'http://localhost:8055/auth/login/google',
    //   {
    //     query: {
    //       redirect: 'http://localhost:3000',
    //     },
    //   },
    // )
    await signIn('google', { redirect: false })
  }

  useEffect(() => {
    console.log(
      'ERROR: ' + JSON.stringify(router.query),
    )
    if (typeof router.query.error === 'string') {
      if (router.query.error === 'Callback') {
        setError('e-mail já cadastrado')
      }
    }
    return () => {
      setError('')
    }
  }, [status, router])

  return (
    <Base>
      <S.FormLogin>
        <FormLogin0
          onLogin={handleLogin}
          errorMesage={error}
        />
      </S.FormLogin>
      <S.ContainerProviders>
        <ButtonWithIcon
          onClick={handleLoginGoogle}
          text={'Login com Google'}
          Icon={BsGoogle}
        />
      </S.ContainerProviders>
    </Base>
  )
}
