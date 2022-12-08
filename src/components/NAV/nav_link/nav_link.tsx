import Link from 'next/link'
import { ReactNode } from 'react'
import * as S from './S.nav_link'

export type navLinkProps = {
  children: ReactNode
  redirect: string
  newTab?: boolean
}

export const NavLink = ({
  children,
  redirect,
  newTab,
}: navLinkProps) => {
  return <Link href={redirect}>{children}</Link>
}
