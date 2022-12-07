import * as S from './S.form_login_0'
import React, { useState } from 'react'
import { InputOne } from '../../INPUT/input_one/input_one'
import { RiLockPasswordLine } from 'react-icons/ri'
import { MdAlternateEmail } from 'react-icons/md'
import { ButtonOne } from '../../BUTTON/button_one/button_one'

export type formLogin0Props = {
  errorMesage: any
  onLogin: any
}

export const FormLogin0 = ({
  errorMesage,
  onLogin,
}: formLogin0Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassoword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (
    event: React.FormEvent,
  ) => {
    setLoading(true)
    event.preventDefault()
    if (onLogin) {
      await onLogin(email, password)
    }
    setLoading(false)
  }

  return (
    <S.Main onSubmit={handleSubmit}>
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
          {loading ? 'Aguarde...' : 'Entrar'}
        </ButtonOne>
      </S.ContainerButton>
    </S.Main>
  )
}
