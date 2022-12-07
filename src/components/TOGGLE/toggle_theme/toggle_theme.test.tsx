import { renderTheme } from '../../styles/render-theme'
import { ToggleTheme } from './toggle_theme'
import { mock_toggle_theme } from './M.toggle_theme'

describe('<ToggleTheme />', () => {
  it('should render', () => {
    renderTheme(<ToggleTheme { ...mock_toggle_theme } />)
  })
})
