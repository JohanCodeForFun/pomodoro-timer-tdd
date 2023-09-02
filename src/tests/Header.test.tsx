import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Tests for Header component', () => {
  
  it('renders component with header', () => {
    render(<Header />);

    screen.getByRole('heading', {
      name: "Header 2023"
    })
  });
});