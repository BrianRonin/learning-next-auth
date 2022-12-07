import { useSession } from 'next-auth/react'
import { Base } from '../templates/Base/Base'

export default function Home() {
  const { data: session } = useSession()

  return (
    <Base>
      <div
        style={{
          textAlign: 'center',
          marginTop: '10rem',
        }}
      >
        <h1>Good luck 👻</h1>
        <p>{process.env.NEXT_PUBLIC_LOCALL}</p>
        <pre>
          sessão:{' '}
          {session && JSON.stringify(session)}
        </pre>
      </div>
    </Base>
  )
}

export const getServerSideProps = async (ctx) => {
  console.log(process.env.NEXT_PUBLIC_LOCALL)

  return {
    props: {},
  }
}
