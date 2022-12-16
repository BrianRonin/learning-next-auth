import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useAuthenticated = () => {
  const router = useRouter()
  const { data, status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated')
      router.push('/login', {
        query: { redirect: router.pathname },
      })
  }, [status])

  if (status !== 'authenticated' || data.auth) {
    return null
  }

  return true
}
