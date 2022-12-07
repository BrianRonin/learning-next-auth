import { renderTheme } from '../../../styles/render-theme'
import { InputOne } from './input_one'
import { mock_input_one } from './M.input_one'

describe('<InputOne />', () => {
  it('should render', () => {
    renderTheme(<InputOne { ...mock_input_one } />)
  })
})
