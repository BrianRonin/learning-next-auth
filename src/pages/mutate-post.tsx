import { useRouter } from 'next/router'
import { MutatePost as _MutatePost } from '../templates/POST/MutatePost/MutatePost'

export default function MutatePost() {
  const router = useRouter()
  const updatePost = {
    title: router.query.title as string,
    content: router.query.content as string,
  }
  console.log(router.query)
  return <_MutatePost post={updatePost} />
}
