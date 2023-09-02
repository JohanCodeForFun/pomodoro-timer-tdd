import { useState } from 'react'
import '../../public/App.css'
import PomodoroTimer from './PomodoroTimer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PomodoroTimer />
    </>
  )
}

export default App
