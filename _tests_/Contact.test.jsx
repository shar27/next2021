import Contact from '../pages/index'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';


describe('Contact', () => {
    it('renders a button', () => {
        render(<Contact/>, <Contact/>)

    const button = screen.getAllByText('Contact me', () => {
        expect(button).toBeInTheDocument()
    })
    })
})