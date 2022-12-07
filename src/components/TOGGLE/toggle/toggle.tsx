import { useEffect, useState } from 'react'
import * as S from './S.toggle'

export type toggleProps = {
  text?: string
  onChange?: (checked: boolean) => any
  ifChecked?: () => any
  ifNoChecked?: () => any
  initialValue?: () => boolean
}

export const Toggle = ({
  text,
  onChange,
  ifChecked,
  ifNoChecked,
  initialValue,
}: toggleProps) => {
  const [checked, setChecked] = useState(
    initialValue ? initialValue() : false,
  )

  useEffect(() => {
    checked &&
      typeof ifChecked === 'function' &&
      ifChecked()

    if (
      !checked &&
      typeof ifNoChecked === 'function'
    )
      ifNoChecked()
    typeof onChange === 'function' &&
      onChange(checked)
  }, [checked])

  const handle_change = () => {
    setChecked((s) => !s)
  }

  return (
    <S.Main>
      <S.Label>
        {text}
        <S.Input
          type={'checkbox'}
          value={text}
          onChange={handle_change}
          checked={checked}
        />
        <S.Slider></S.Slider>
      </S.Label>
    </S.Main>
  )
}
