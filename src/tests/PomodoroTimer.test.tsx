import { beforeEach, describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import PomodoroTimer from '../containers/PomodoroTimer';

describe('Tests for PomodoroTimer component', () => {

  beforeEach(() => {
    render(<PomodoroTimer />);
    
  })

  it('renders PomodoroTimer component', () => {
    render(<PomodoroTimer />);
  })

})