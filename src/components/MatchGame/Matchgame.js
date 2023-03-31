import {Component} from 'react'
import BigImage from '../BigImage/bigimage'
import MatchGameImages from '../MatchGameImages/Matchgameimages'
import NavBar from '../NavBar/Navbar'
import Scorecard from '../Scorecard/Scorecard'
import TabItem from '../TabItem/Tabitem'
import './styles.css'

class MatchGame extends Component {
  state = {
    selectedTab: "",
    score: 0,
    timer: 60,
    gameOver: false,
    randomImageId: "",
  }

  componentDidMount () {
    this.handleStartGame()
  }

  handleSmallImage = id => {
    const {randomImageId} = this.state
    const {imagesList} = this.props
    if (randomImageId === id) {
        const randomNum = Math.floor(Math.random() * 30)
        this.setState(prev => ({
            randomImageId: imagesList[randomNum].id,
            score: prev.score + 10,
        }))
    } else {
      clearInterval(this.timerId)
      this.setState({
        gameOver: true,
      })
    }
  }

  runTimer = () => {
    const {timer} = this.state;
    if (timer === 0) {
      clearInterval(this.timerId)
      this.setState({
        gameOver: true,
      })
    } else {
      this.setState(prev => ({
        timer: prev.timer - 1
      }))
    }
  }

  handleStartGame = () => {
    const { tabsList, imagesList } = this.props;
    const randomNum = Math.floor(Math.random() * 30)
    this.setState({ 
      selectedTab: tabsList[0].tabId,
      score: 0,
      timer: 60,
      gameOver: false,
      randomImageId: imagesList[randomNum].id,
    })
    this.timerId = setInterval(() => this.runTimer(), 1000)
  }
  
  handleTabBtn = id => {
    this.setState({selectedTab: id})
  }

  render() {
    const {selectedTab, score, timer, gameOver, randomImageId} = this.state
    const {tabsList, imagesList} = this.props
    const filterImagesList = imagesList.filter(each => each.category === selectedTab)
    const randomImageData = imagesList.find(each => each.id === randomImageId)
    return (
      <div className="matchgame-container">
        <div className="navbar-container">
          <NavBar score={score} timer={timer}/>
        </div>
        {gameOver ? (
            <Scorecard score={score} handlePlayAgain={this.handleStartGame}/>
        ) : (
            <>
                {/* <div className="big-image-container"> */}
                  {/* {randomImageData && ( */}
                  {/* <BigImage imageUrl={randomImageData?.imageUrl} altUrl={randomImageData?.category}/> */}
                  <div className="image-container big-image-container">
                    <img
                      src={randomImageData?.imageUrl}
                      alt={randomImageData?.categor}
                    />
                  </div>
                  {/* )} */}
                {/* </div> */}
                <ul className="select-tab-container">
                  {tabsList.map(each => (
                    <TabItem
                      key={each.tabId}
                      tabName={each.displayText} 
                      tabId={each.tabId}
                      selectedTab={selectedTab}
                      handleTabBtn={this.handleTabBtn}
                    />
                  ))}
                </ul>
                <ul className="matchgame-images">
                  {filterImagesList.map(eachCard => (
                    <MatchGameImages
                      key={eachCard.id}
                      imageData={eachCard}
                      handleSmallImage={this.handleSmallImage}
                    />
                  ))}
                </ul>
            </>
        )}
        
      </div>
    )
  }
}

export default MatchGame