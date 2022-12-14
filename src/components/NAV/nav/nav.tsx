import { NavLink } from '../nav_link/nav_link'
import { IoMdLogOut } from 'react-icons/io'
import * as S from './S.nav'
import Link from 'next/link'
import {
  signOut,
  useSession,
} from 'next-auth/react'
import { useRouter } from 'next/router'
import { useTheme } from '@emotion/react'
import { ToggleTheme } from '../../TOGGLE/toggle_theme/toggle_theme'

export const Nav = () => {
  const theme = useTheme()
  const { status, data } = useSession()
  const router = useRouter()

  return (
    <S.Main>
      <S.Content>
        <NavLink redirect='/'>Home</NavLink>

        {status === 'unauthenticated' && (
          <Link
            href={{
              pathname: '/login',
              query: {
                redirect: router.pathname,
              },
            }}
          >
            Login
          </Link>
        )}
        {status === 'authenticated' && (
          <>
            <NavLink redirect='/posts'>
              Posts
            </NavLink>
            <div
              className='logout'
              onClick={() =>
                signOut({ redirect: false })
              }
            >
              <IoMdLogOut
                color={theme.colors.bg}
              />
            </div>
          </>
        )}
        <ToggleTheme />
      </S.Content>
    </S.Main>
  )
}
