import { gql } from '@apollo/client'

export const query_me = gql`
  query logins {
    users_me {
      first_name
      last_name
      avatar {
        filename_disk
      }
      email
    }
  }
`
