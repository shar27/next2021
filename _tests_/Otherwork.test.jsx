import Otherwork from '../pages/index'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';


describe('Otherwork', () => {
    it('renders images', () => {
        render(<Otherwork/>)

    const images = screen.getByAltText('spendlet', () => {
        expect(images).toBeInTheDocument()
    })
    })
})