import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('My app', () => {
  it('works like a charm', () => {
    render(<App />);

    expect(screen.getByRole('main')).toHaveTextContent('Hello');
  });
});
