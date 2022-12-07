import { gql } from '@apollo/client'

export const forgetPassword = gql`
  mutation forgetPassword(
    $email: String!
    $url: String!
  ) {
    auth_password_request(
      email: $email
      reset_url: $url
    )
  }
`
export const resetPassword = gql`
  mutation resetPassword(
    $token: String!
    $password: String!
  ) {
    auth_password_reset(
      token: $token
      password: $password
    )
  }
`

export const auth = gql`
  mutation Auth(
    $email: String!
    $password: String!
  ) {
    auth_login(
      email: $email
      password: $password
    ) {
      access_token
      refresh_token
      expires
    }
  }
`

export const refreshToken = gql`
  mutation RefreshToken($RefreshToken: String) {
    auth_refresh(
      refresh_token: $RefreshToken
      mode: json
    ) {
      access_token
      refresh_token
    }
  }
`

export const createUser = gql`
  mutation CreateUser(
    $email: String!
    $Password: Hash
  ) {
    create_users_item(
      data: {
        email: $email
        password: $Password
        role: "6a2f9a94-91d4-499c-991b-4a6269af857b"
      }
    )
  }
`
