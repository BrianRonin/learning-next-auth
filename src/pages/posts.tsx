import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Posts as T_Posts } from '../templates/Posts/Posts'
export default function Posts() {
  return <T_Posts />
}

// export const getServerSideProps = async (ctx) => {
//   const session = await getSession()
//   if (!session) return
//   try {
//     // const { posts } = await
//   } catch (e) {
//     console.log(e)
//     return
//   }
// }
