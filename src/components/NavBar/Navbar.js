import Score from './Score'
import './styles.css'
import Timer from './Timer'


const NavBar = props => {
  const {score, timer} = props
  return (
    <div className="navbar-top-container">
      <div className="navbar-image">
        <img 
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="navbar-image"
        />
      </div>
      <div className="score-timer-container">
        <Score score={score} />
        <Timer timer={timer} />
      </div>
    </div>
  )
}

export default NavBar