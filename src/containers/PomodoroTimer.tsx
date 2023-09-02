import Header from '../components/Header'
import SessionControl from '../components/SessionControl'
import Timer from '../components/Timer'
import Footer from '../components/Footer'
import TimerControl from '../components/TimerControl'

const PomodoroTimer = () => {
  return (
    <div>
      <Header />
      <SessionControl />
      <SessionControl />
      <Timer />
      <TimerControl />
      <Footer />

    </div>
  )
}

export default PomodoroTimer