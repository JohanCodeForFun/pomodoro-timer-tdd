import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SessionControl from '../components/SessionControl';

describe('Tests for session controller', () => {
  
  it('renders Session controller', () => {
    render(<SessionControl />);

  })
})