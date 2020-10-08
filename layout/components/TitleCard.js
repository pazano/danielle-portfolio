import './TitleCard.scss';

const TitleCard = ({ title, image, lede }) => {
  if (image) {
    const imageStyle = {
      backgroundImage: `url('${image}')`
    }
    return (
      <div className="content padding__low">
        <div className="titlecard">
          <h1>{ title }</h1>
          <div className="titlecard__image" style={imageStyle}></div>
          {lede ? `<p>${lede}</p>` : ''}
        </div>
      </div>
    )
  } else {
    return (
      <div className="content padding__low">
        <div className="titlecard">
          <h1>{title}</h1>
          {lede ? `<p>${lede}</p>` : ''}
        </div>
      </div>
    )
  }
}

export default TitleCard;