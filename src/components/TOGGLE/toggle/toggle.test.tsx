import { renderTheme } from '../../styles/render-theme'
import { Toggle } from './toggle'
import { mock_toggle } from './M.toggle'

describe('<Toggle />', () => {
  it('should render', () => {
    renderTheme(<Toggle { ...mock_toggle } />)
  })
})
