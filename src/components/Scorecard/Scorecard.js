import './styles.css'

const Scorecard = props => {
  const {score, handlePlayAgain} = props
  return (
    <div className="scorecard-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-image"
      />
      <h1 className="scorecard-heading">YOUR SCORE</h1>
      <h1 className="para">{score}</h1>
      <button type="button" className="scorecard-btn" onClick={() => handlePlayAgain()}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-icon"
        />
        <p className="btn-title">PLAY AGAIN</p> 
      </button>
    </div>
  )
}

export default Scorecard