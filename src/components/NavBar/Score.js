import './styles.css'

const Score = props => {
  const {score} = props
  return (
    <div className="score-box">
      <h1 className="score-header">Score: <span className="score-num">{score}</span></h1>
    </div>
  )
}

export default Score
