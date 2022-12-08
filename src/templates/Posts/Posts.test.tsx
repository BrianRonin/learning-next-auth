import { renderTheme } from '../../styles/render-theme'
import { Posts } from './Posts'
import { mock_posts } from './M.Posts'

describe('<Posts />', () => {
  it('should render', () => {
    renderTheme(<Posts { ...mock_posts } />)
  })
})
