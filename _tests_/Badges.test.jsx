import Badges from '../pages/index'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';


describe('Badges', () => {
    it('renders images', () => {
        render(<Badges/>)

    const badge = screen.getAllByAltText('tech', () => {
        expect(badge).toBeInTheDocument()
    })
    })
})