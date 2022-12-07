import { gql } from '@apollo/client'

export const getAllPosts = gql`
  query allPost {
    post {
      conteudo
    }
  }
`
