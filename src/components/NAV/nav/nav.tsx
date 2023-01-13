import { NavLink } from '../nav_link/nav_link'
import { IoMdLogOut } from 'react-icons/io'
import * as S from './S.nav'
import Link from 'next/link'
import {
  signOut,
  useSession,
} from 'next-auth/react'
import Router, { useRouter } from 'next/router'
import { useTheme } from '@emotion/react'
import { ToggleTheme } from '../../TOGGLE/toggle_theme/toggle_theme'
import {
  useState,
  useEffect,
  useContext,
} from 'react'
import { C_LoadingRoute } from '../../../contexts/loading_route/loading_route'

export const Nav = () => {
  const theme = useTheme()
  const { status } = useSession()
  const [routeLoading, setRouteLoading] =
    useState('')

  useEffect(() => {
    Router.events.on('routeChangeStart', (e) =>
      setRouteLoading(e),
    )
    Router.events.on('routeChangeComplete', (e) =>
      setRouteLoading(''),
    )
    Router.events.on('routeChangeError', (e) =>
      setRouteLoading(''),
    )
  }, [Router.events])

  const router = useRouter()
  if (status === 'loading') return null

  return (
    <S.Main>
      <S.Content>
        <Link href={'/'}>
          <S.NavLink
            loading={routeLoading === '/home'}
          >
            Home
          </S.NavLink>
        </Link>
        {status === 'unauthenticated' && (
          <Link
            href={{
              pathname: '/login',
              query: {
                redirect: router.pathname,
              },
            }}
          >
            <S.NavLink
              loading={routeLoading === '/login'}
            >
              Login
            </S.NavLink>
          </Link>
        )}
        {status === 'authenticated' && (
          <div>
            <Link href='/posts'>
              <S.NavLink
                loading={
                  routeLoading === '/posts' ||
                  routeLoading === '/mutate-post'
                }
              >
                Posts
              </S.NavLink>
            </Link>
            <div
              className='logout'
              onClick={() =>
                signOut({ redirect: false })
              }
            >
              <IoMdLogOut
                color={theme.colors.text}
              />
            </div>
          </div>
        )}
        <ToggleTheme className='toggle-theme-inside' />
        <ToggleTheme className='toggle-theme-outside' />
      </S.Content>
    </S.Main>
  )
}
