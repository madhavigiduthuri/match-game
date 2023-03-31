import './styles.css'

const MatchGameImages = props => {
  const {imageData, handleSmallImage} = props
  return (
    <li className="matchgame-image-container">
      <button type="button" className="small-image-btn" onClick={() => handleSmallImage(imageData.id)}>
        <img
          src={imageData.thumbnailUrl}
          alt={imageData.category}
          className="image-icons"
        />
      </button>
    </li>
  )
}

export default MatchGameImages
