import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Timer from '../components/Timer';

describe('Tests for Timer component', () => {
  
  it('renders Timer', () => {
    render(<Timer />);

  })
})