import { useState } from 'react'
import Button from './Button'

const TimerControl = () => {
  const [timerStatus, setTimerStatus] = useState("Click to Start")


  return (
    <div>
      <Button timerStatus={timerStatus} setTimerStatus={setTimerStatus}/>
      <Button title="Reset Timer"/>
    </div>
  )
}

export default TimerControl