import { gql } from '@apollo/client'

export const getAllPosts = gql`
  query allPost {
    post {
      titulo
      conteudo
      id
    }
  }
`
