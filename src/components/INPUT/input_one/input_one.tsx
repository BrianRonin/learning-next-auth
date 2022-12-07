import { ChangeEvent, ReactNode } from 'react'
import * as S from './S.input_one'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useState } from 'react'
export type inputOneProps = {
  label: string
  name: string
  type?: any
  disabled?: boolean
  onChange?: (value: string) => any
  errorMessage?: string
  value?: string
  icon?: ReactNode
  as?: 'input' | 'textarea'
  reference?: HTMLInputElement | null
}

export const InputOne = ({
  type = 'text',
  label,
  name,
  disabled = false,
  onChange,
  errorMessage = '',
  value = '',
  icon = false,
  as = 'input',
  reference = null,
}: inputOneProps) => {
  const [hasValue, setHasValue] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = e.target.value
    if (inputValue) {
      onChange && onChange(inputValue)
      !hasValue && setHasValue(true)
      setInputValue(inputValue)
    } else {
      cleanInput()
    }
  }

  const cleanInput = () => {
    setInputValue('')
    setHasValue(false)
  }

  return (
    <S.Main>
      <S.inputContainer
        errorMesage={errorMessage}
        hasIcon={!!icon}
      >
        <S.Input
          type={type}
          name={name}
          id={name}
          disabled={disabled}
          onChange={handleChange}
          placeholder={label}
          errorMessage={errorMessage}
          value={inputValue}
          as={as}
          defaultValue={value}
        />
        <S.Label htmlFor={name} element={as}>
          {label}
        </S.Label>
        {!!icon && as !== 'textarea' && icon}
        {!icon &&
          as !== 'textarea' &&
          hasValue && (
            <AiFillCloseCircle
              onClick={cleanInput}
            />
          )}
      </S.inputContainer>
      {!!errorMessage && (
        <S.ErrorMessage>
          {errorMessage}
        </S.ErrorMessage>
      )}
    </S.Main>
  )
}
