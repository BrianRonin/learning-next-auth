import { renderTheme } from '../../../styles/render-theme'
import { FormLogin0 } from './form_login_0'
import { mock_form_login_0 } from './M.form_login_0'

describe('<FormLogin0 />', () => {
  it('should render', () => {
    renderTheme(<FormLogin0 { ...mock_form_login_0 } />)
  })
})
