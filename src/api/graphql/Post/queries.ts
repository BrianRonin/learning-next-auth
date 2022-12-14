import { gql } from '@apollo/client'

export const getAllPosts = gql`
  query allPost {
    post {
      title
      content
      id
    }
  }
`
