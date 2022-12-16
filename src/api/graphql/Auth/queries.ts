import { gql } from '@apollo/client'

export const query_me = gql`
  query logins {
    users_me {
      first_name
      email
    }
  }
`
export const query_user = gql`
  query users($email: String!) {
    users(filter: { email: { _eq: $email } }) {
      email
    }
  }
`
