import { renderTheme } from '../../../styles/render-theme'
import { Nav } from './nav'
import { mock_nav } from './M.nav'

describe('<Nav />', () => {
  it('should render', () => {
    renderTheme(<Nav { ...mock_nav } />)
  })
})
