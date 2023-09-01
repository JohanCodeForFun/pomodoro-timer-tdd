import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('Tests for Button component', () => {

  it('renders Button component', () => {
    render(<Button />);
  })
})