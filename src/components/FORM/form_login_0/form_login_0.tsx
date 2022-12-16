import * as S from './S.form_login_0'
import React, { useState } from 'react'
import { InputOne } from '../../INPUT/input_one/input_one'
import { RiLockPasswordLine } from 'react-icons/ri'
import { MdAlternateEmail } from 'react-icons/md'
import { ButtonOne } from '../../BUTTON/button_one/button_one'
import { useMutation } from '@apollo/client'
import { createUser } from '../../../api/graphql/Auth/mutations'
import { directus } from '../../../api/directus'

export type callBackFormLogin0Props = {
  email: string
  password: string
}

export type formLogin0Props = {
  errorMesage?: string
  onLogin: (props: callBackFormLogin0Props) => any
}

export const FormLogin0 = ({
  errorMesage,
  onLogin,
}: formLogin0Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassoword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [isNewAccount, setIsNewAccount] =
    useState(false)
  const [createAcount] = useMutation(createUser)

  const handleSubmit = async (
    event: React.FormEvent,
  ) => {
    setLoading(true)
    event.preventDefault()
    if (!isNewAccount) {
      await onLogin({ email, password })
    } else {
      const x = await directus.users.createOne({
        first_name: name,
        email,
        password,
        role: '6a2f9a94-91d4-499c-991b-4a6269af857b',
      })
      console.log(x)
      // await onLogin({ email, password })
    }
    setLoading(false)
  }

  return (
    <>
      <S.SwitchMode isNewAccount={isNewAccount}>
        <ButtonOne
          disabled={loading}
          onClick={() => setIsNewAccount(false)}
          className={'button-login-account'}
        >
          Login
        </ButtonOne>
        <ButtonOne
          disabled={loading}
          onClick={() => setIsNewAccount(true)}
          className={'button-create-account'}
        >
          Criar conta
        </ButtonOne>
      </S.SwitchMode>
      <S.Main onSubmit={handleSubmit}>
        {isNewAccount && (
          <InputOne
            name='user-name'
            label='name'
            onChange={(v) => setName(v)}
            value={name}
            type='string'
          />
        )}
        <InputOne
          name='user-identifier'
          label='e-mail'
          onChange={(v) => setEmail(v)}
          value={email}
          icon={<MdAlternateEmail />}
          type='email'
        />
        <InputOne
          name='user_passord'
          label='Senha'
          onChange={(v) => setPassoword(v)}
          value={password}
          icon={<RiLockPasswordLine />}
          type='password'
        />
        {!!errorMesage && (
          <S.ErrorMessage>
            {errorMesage}
          </S.ErrorMessage>
        )}
        <S.ContainerButton>
          <ButtonOne disabled={loading}>
            {loading
              ? 'Aguarde...'
              : isNewAccount
              ? 'Criar'
              : 'Entrar'}
          </ButtonOne>
        </S.ContainerButton>
      </S.Main>
    </>
  )
}
