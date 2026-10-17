// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RoughBeat title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RoughBeat/i);
    expect(titleElement).toBeInTheDocument();
});
