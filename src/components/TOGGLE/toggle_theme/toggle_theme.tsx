import * as S from './S.toggle_theme'
import { Toggle } from '../toggle/toggle'
import { useContext } from 'react'
import { theme_context } from '../../../contexts/theme/theme'
import { if_window } from '../../../utils/is-window'

export const ToggleTheme = () => {
  const { setTheme } = useContext(theme_context)
  const changeTheme = (check: boolean) => {
    return if_window(() => {
      localStorage.setItem('myCat', 'Tom')
      setTheme(check ? 'dark' : 'light')
      console.log(check)
    })
  }

  const currentTheme = (): boolean => {
    return if_window(
      () => {
        const localTheme =
          localStorage.getItem('theme')
        if (!localTheme) return false
        const newTheme = JSON.parse(localTheme)
        console.log(newTheme.name)
        return newTheme.name === 'dark'
      },
      () => false,
    ) as boolean
  }

  return (
    <S.Main>
      <Toggle
        onChange={changeTheme}
        initialValue={currentTheme}
      />
    </S.Main>
  )
}
