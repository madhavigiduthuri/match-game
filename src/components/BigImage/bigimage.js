import './styles.css'

const BigImage = props => {
  const {imageUrl, altUrl} = props
  return (
    <div className="image-container">
      <img
        src={imageUrl}
        alt={altUrl}
      />
    </div>
  )
}

export default BigImage
