import './styles.css'

const Timer = props => {
  const {timer} = props
  return (
    <div className="timer-box">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
        alt="timer"
        className="timer-image"
      />
      <h1 className="timer-header">{timer} sec</h1>
    </div>
  )
}

export default Timer
