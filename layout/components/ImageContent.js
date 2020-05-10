import Image from './Image';
import './ImageContent.scss';

const ImageContent = ({ image, content }) => {
  return (
    <div className={`module__image-content module__image-content__${image.orientation}`}>
      <Image
        url={image.url}
        alt={image.alt}
        aspectRatio={image.aspectRatio}
        respectAspect={true}
        style={`module__image-content__image`}
      />
      <div className="module__image-content__content">
        <div className="module__image-content__content-inner" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

export default ImageContent;