import { InputOne } from '../../INPUT/input_one/input_one'
import { useState, FormEvent } from 'react'
import * as S from './S.form_post'
import { ButtonOne } from '../../BUTTON/button_one/button_one'
import { Post } from '../../../types/post'

export type formPostProps = {
  onSave?: (post: Post) => any
  post: Post | Record<string, never>
}

export const FormPost = ({
  onSave,
  post,
}: formPostProps) => {
  const {
    title = '',
    content = '',
    id = -1,
  } = post || {}
  const [newTitle, setNewTitle] = useState(title)
  const [newContent, setNewContent] =
    useState(content)
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (
    event: FormEvent,
  ) => {
    setSaving(true)
    event.preventDefault()
    const newPost = {
      title: newTitle,
      content: newContent,
      id,
    }
    if (onSave) {
      await onSave(newPost)
    }

    setSaving(false)
  }

  return (
    <S.Main onSubmit={handleSubmit}>
      <InputOne
        name='post-title'
        label='Titulo'
        value={newTitle}
        onChange={(v) => setNewTitle(v)}
      />
      <InputOne
        name='post-content'
        label='Post Content'
        value={newContent}
        onChange={(v) => setNewContent(v)}
        as='textarea'
      />
      <ButtonOne disabled={saving} type='submit'>
        {saving ? 'Aguarde...' : 'Salvar'}
      </ButtonOne>
    </S.Main>
  )
}
