import { gql } from '@apollo/client'

export const createPost = gql`
  mutation createPost(
    $content: String
    $title: String
  ) {
    create_post_item(
      data: { content: $content, title: $title }
    ) {
      content
      title
      id
    }
  }
`
export const updatePost = gql`
  mutation updatedPost(
    $title: String
    $content: String
    $id: ID!
  ) {
    update_post_item(
      data: { content: $content, title: $title }
      id: $id
    ) {
      content
      title
      id
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
