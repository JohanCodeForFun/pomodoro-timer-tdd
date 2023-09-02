import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import App from '../containers/App';
import PomodoroTimer from '../containers/PomodoroTimer';

describe('App', () => {

  it('renders App', () => {
    render(<App />);
  })

  it('renders pomodoro timer', () => {
    render(<PomodoroTimer />)
  })
})