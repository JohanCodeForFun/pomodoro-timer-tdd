import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import App from '../App';
import Header from '../components/Header';
import Timer from '../components/Timer';
import Button from '../components/Button';
import SessionControl from '../components/SessionControl';

describe('App', () => {

  it('renders App', () => {
    render(<App />);
  })

  it('renders all components for pomodoro timer', () => {
    render(<App />);
    render(<Timer />);
    render(<Header />);
    render(<SessionControl />);
    render(<Button />);
  })
})