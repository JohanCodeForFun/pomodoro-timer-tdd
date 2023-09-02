import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('Tests for Button component', () => {

  beforeEach(() => {
    render(<Button title="Click to Start" />);
    
  })

  it('renders Button component', () => {
    render(<Button title="Click to Start" />);
  })


  it('button has "Click to Start" on it', () => {
    // const button = mountedButton.find('button');
    
    screen.getByRole('button')
    
  })
  it('play button changes from "play" to "pause" when clicked', () => {

    const button = screen.getByRole('button', {
      name: "Click to Start"
    })

    fireEvent.click(screen.getByRole('button', {
      name: 'Click to Start'}
      ))

    expect(button).toHaveBeenCalledOnce()

  })
  it('button has "reset" on it', () => {

    render(<Button title="reset" />);

  })

})