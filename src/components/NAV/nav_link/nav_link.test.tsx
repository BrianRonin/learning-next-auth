import { renderTheme } from '../../../styles/render-theme'
import { NavLink } from './nav_link'
import { mock_nav_link } from './M.nav_link'

describe('<NavLink />', () => {
  it('should render', () => {
    renderTheme(<NavLink { ...mock_nav_link } />)
  })
})
