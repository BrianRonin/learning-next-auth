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
  mutation RefreshToken($token: String) {
    auth_refresh(refresh_token: $token) {
      access_token
      refresh_token
      expires
    }
  }
`

export const createUser = gql`
  mutation CreateUser(
    $email: String!
    $password: Hash!
  ) {
    create_users_item(
      data: { email: $email, password: $password }
    )
  }
`
