type Props = {
  title?: string;
  timerStatus?: string,
  setTimerStatus: (input: string) => void,
}


const Button = ({title, timerStatus, setTimerStatus}: Props) => {

  const handleClick = (input: string) => {
    input === "Click to Pause" ? setTimerStatus('Click to Start') : setTimerStatus('Click to Pause')
  }

  return (
    <div>
      <button onClick={() => handleClick(timerStatus)}>
        { timerStatus? timerStatus : title}
      </button>
    </div>
  );
};

export default Button;
