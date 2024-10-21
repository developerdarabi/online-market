import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TemplateWrapper from './Templates';

describe('App Component', () => {
  it('renders the counter app correctly', () => {
    render(<MemoryRouter initialEntries={['/']}><TemplateWrapper /></MemoryRouter>)
    expect(screen.getByText(/Counter App/i)).toBeInTheDocument();
  });

  it('initial counter value must be 0', () => {
    render(<MemoryRouter initialEntries={['/']}><TemplateWrapper /></MemoryRouter>)
    const counterResult = screen.getByTestId('counter_result');
    expect(counterResult).toHaveTextContent('0')
  });

  it('after increase counter must be 1',()=>{
    render(<MemoryRouter initialEntries={['/']}><TemplateWrapper /></MemoryRouter>)
    const counterResult = screen.getByTestId('counter_result')
    const increaseButton = screen.getByTestId('increment_button')
    fireEvent.click(increaseButton)
    expect(counterResult).toHaveTextContent('1')
  })

  it('after decrease counter must be -1',()=>{
    render(<MemoryRouter initialEntries={['/']}><TemplateWrapper /></MemoryRouter>)
    const counterResult = screen.getByTestId('counter_result')
    const decrementButton = screen.getByTestId('decrement_button')
    fireEvent.click(decrementButton)
    expect(counterResult).toHaveTextContent('-1')
  })

  it('redirect to products page on click products link',()=>{
    render(<MemoryRouter initialEntries={['/']}><TemplateWrapper /></MemoryRouter>)
    const productsLink = screen.getByTestId('link:home_products')
    fireEvent.click(productsLink)
    expect(screen.getByTestId('page:products')).toBeInTheDocument()
  })
});