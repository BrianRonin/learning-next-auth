import { gql } from '@apollo/client'

export const createPost = gql`
  mutation createPost(
    $content: String
    $title: String
  ) {
    create_post_item(
      data: { conteudo: $content, titulo: $title }
    ) {
      conteudo
      titulo
    }
  }
`
export const updatePost = gql`
  mutation updatedPost(
    $content: String
    $id: ID!
  ) {
    update_post_item(
      data: { conteudo: $content }
      id: $id
    ) {
      conteudo
    }
  }
`

export const deletePost = gql`
  mutation deletePost($id: ID!) {
    delete_post_item(id: $id) {
      id
    }
  }
`
