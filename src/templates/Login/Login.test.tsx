import { renderTheme } from '../../styles/render-theme'
import { Login } from './Login'
import { mock_login } from './M.Login'

describe('<Login />', () => {
  it('should render', () => {
    renderTheme(<Login { ...mock_login } />)
  })
})
