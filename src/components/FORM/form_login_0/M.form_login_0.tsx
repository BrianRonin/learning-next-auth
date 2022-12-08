import { formLogin0Props } from './form_login_0'

export const mock_form_login_0 = {
  // errorMesage: ,
  onLogin: (f) =>
    new Promise<void>((resolve, reject) => {
      setTimeout(resolve, 3000)
    }),
} as formLogin0Props
