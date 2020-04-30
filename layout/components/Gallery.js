import Image from './Image';
import './Gallery.scss';

// TODO:  update image object structure

const GalleryImageRow = ({ galleryImages }) => {
  const rowClassName = galleryImages.reduce((result, galleryImage) => result ? result + '-' + galleryImage.aspect : galleryImage.aspect, "");
  const aspectCount = new Set(galleryImages.map(galleryImage => galleryImage.aspect)).size;

  let counter = 0;
  return(
    <div className={`gallery__row ${rowClassName}`}>
      { galleryImages &&
        galleryImages.map(({ url, alt, ratio }) =>
          <GalleryImage
            url={url}
            alt={alt}
            style={`image-${counter}`}
            ratio={ratio}
            respectAspect={aspectCount > 1 ? false : true}
            key={`gallery-image-${++counter}`}
          />
        )
      }
    </div>
  )
}

const GalleryImage = ({ url, alt, style, ratio, respectAspect, key }) => {

  if (respectAspect) {
    const splitParams = ratio && ratio.split("x");
    const viewBoxParams = splitParams[0] + " " + splitParams[1];

    return (
      <div className={`image__ratio ${style}`}>
        <svg viewBox={`0 0 ${viewBoxParams}`}></svg>
        <Image
          url={url}
          alt={alt}
          key={key}
        />
      </div>
    )
  }
  else {
    return (
      <div className={style}>
        <Image
          url={url}
          alt={alt}
          key={key}
        />
      </div>
    )
  }
}

// takes in a row
const Gallery = ({ galleryRows, displayType }) => {
  return (
    <div className={`gallery__container ${" gallery__width-" + displayType}`}>
      { galleryRows &&
        galleryRows.map(( images ) =>
          <GalleryImageRow
            galleryImages={images}
            displayType={displayType}
          />)
      }
    </div>
  )
}

export default Gallery;