import { default as LocalImage } from './ImageComponent';
import './ImageContent.scss';

const ImageContent = ({ image, content, imageSide="left", contentBackground=false }) => {
  return (
    <div className={`module__image-content module__image-content__${image.orientation}-${imageSide}`}>
      <LocalImage
        url={image.url}
        alt={image.alt}
        aspectRatio={image.aspectRatio}
        respectAspect={true}
        style={`module__image-content__image`}
      />
      <div className={`module__image-content__content ${contentBackground && "module__image-content__bgcolor"}`}>
        <div className="module__image-content__content-inner" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

export default ImageContent;