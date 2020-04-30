import './Hero.scss';

const Hero = ({ text, image, height }) => {
  const imageStyle = {
    backgroundImage: `url('${image}')`
  }
  return (
    <div className={`hero ${height === 'large' ? 'hero__large' : height == 'medium' ? 'hero__medium' : 'hero__small'}`}>
      <div className="hero__image" style={imageStyle}></div>
      <div className="hero__content">
        <h1>{ text }</h1>
      </div>
    </div>
  )
}

export default Hero;