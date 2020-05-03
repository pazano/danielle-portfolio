import Link from 'next/link';
import Image from './Image';
import './Gallery.scss';

const GalleryImageRow = ({ galleryImages, links }) => {
  const rowClassName = galleryImages.reduce((result, galleryImage) => result ? result + '-' + galleryImage.aspect : galleryImage.aspect, "");
  const aspectCount = new Set(galleryImages.map(galleryImage => galleryImage.aspect)).size;

  let counter = 0;

  if (!links) {
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
  } else {
    return (
      <div className={`gallery__row ${rowClassName}`}>
        {galleryImages &&
          galleryImages.map(({ url, alt, ratio, label, link }) =>
            <GalleryImageLink
              url={url}
              alt={alt}
              style={`image-${counter}`}
              ratio={ratio}
              respectAspect={aspectCount > 1 ? false : true}
              label={label}
              link={link}
              key={`gallery-image-${++counter}`}
            />
          )
        }
      </div>
    )
  }
}

const GalleryImage = ({ url, alt, style, ratio, respectAspect, key }) => {

  if (respectAspect) {
    const splitParams = ratio && ratio.split("x");
    const viewBoxParams = splitParams[0] + " " + splitParams[1];

    return (
      <div className={`image__respect-aspect ${style}`}>
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

const GalleryImageLink = ({ url, alt, style, ratio, respectAspect, key, label, link }) => {

  if (respectAspect) {
    const splitParams = ratio && ratio.split("x");
    const viewBoxParams = splitParams[0] + " " + splitParams[1];

    return (
      <Link href={link}>
        <div className={`image__respect-aspect link ${style}`}>
          <svg viewBox={`0 0 ${viewBoxParams}`}></svg>
          <Image
            url={url}
            alt={alt}
            key={key}
          />
          <div className="gallery__link">
            <Link href={link}>
              <a>{label}</a>
            </Link>
          </div>
        </div>
      </Link>
    )
  }
  else {
    return (
      <Link href={link}>
        <div className={`link ${style}`}>
          <Image
            url={url}
            alt={alt}
            key={key}
          />
          <div className="gallery__link">
            <Link href={link}>
              <a>{label}</a>
            </Link>
          </div>
        </div>
      </Link>
    )
  }
}


// Gallery
//    Type indicates layout width -- Hero uses smaller gutters than Page
//    Links looks to display a label and link over Gallery entries

const Gallery = ({ galleryRows, type="page", links=false }) => {
  return (
    <div className={`gallery__container ${"gallery__" + type} ${links ? "gallery__with-links" : ''}`}>
      {galleryRows &&
        galleryRows.map((images) =>
          <GalleryImageRow
            galleryImages={images}
            links={links}
          />)
      }
    </div>
  )
}

export default Gallery;