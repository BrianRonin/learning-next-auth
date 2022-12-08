import { useSession } from 'next-auth/react'
import { Home as T_Home } from '../templates/Home/Home'

export default function Home() {
  const { data: session } = useSession()
  return <T_Home />
}

export const getServerSideProps = async (ctx) => {
  console.log(process.env.NEXT_PUBLIC_LOCALL)
  return {
    props: {},
  }
}
