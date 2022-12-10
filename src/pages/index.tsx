import {
  getSession,
  useSession,
} from 'next-auth/react'
import { useEffect } from 'react'
import { Home as T_Home } from '../templates/Home/Home'
export default function Home() {
  const { data } = useSession()
  useEffect(() => {
    console.log('INDEX(SESSION): ' + data)
  }, [data])
  return <T_Home />
}

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx)
  if (!session) return { props: {} }
  return {
    props: {},
  }
}
