import Link from 'next/link';
import ImageComponent from './ImageComponent';
import './Gallery.scss';

const GalleryImageRow = ({ galleryImages, respectAspect, withLinks }) => {

  const rowClassName = galleryImages.reduce((result, galleryImage) => result ? result + '-' + galleryImage.orientation : galleryImage.orientation, "");

  let counter = 0;
  return(
    <div className={`gallery__row ${rowClassName}`}>
      { galleryImages &&
        galleryImages.map(({ url, alt, aspectRatio, metadata }) => {
            const image = {
              url,
              alt,
              aspectRatio,
              slug: metadata.slug,
              respectAspect,
              style: 'image-' + counter,
            }
            if (withLinks) {
              return(
                <GalleryImageLink
                  image={image}
                  key={`gallery-image-${++counter}`}
                />
              )
            } else {
              return(
                <GalleryImage
                  image={image}
                  key={`gallery-image-${++counter}`}
                />
              )
            }
          }
        )
      }
    </div>
  )
}

const GalleryImage = ({ image }) => {
  return (
    <div className={`gallery__image ${image.style}`} >
      <ImageComponent
        url={image.url}
        alt={image.alt}
        aspectRatio={image.aspectRatio}
        respectAspect={image.respectAspect}
      />
    </div>
  )
}

// image:  {url, renditions, alt, style, aspectRatio, respectAspect}
// link:  {label, target, slug}
const GalleryImageLink = ({ image }) => {
  return (
      <Link href="/photography/[slug]" as={`photography/${image.slug}`} >
        <div className={`gallery__image link ${image.style}`} >
          <ImageComponent
            url={image.url}
            alt={image.alt}
            aspectRatio={image.aspectRatio}
            respectAspect={image.respectAspect}
          />
        </div>
      </Link>
  )
}


// Gallery
//    Type indicates layout width -- Hero uses smaller gutters than Page
//    Links looks to display a label and link over Gallery entries

const Gallery = ({ galleryRows, type="page", withLinks=false, visibleLinks=false }) => {

  //  Test for aspects in the list, disable strict aspect management if mixed
  const respectAspect = galleryRows.reduce(((result, row) => {
    return result += new Set(row.map(image => image.orientation)).size;
  }), 0) > galleryRows.length ? false : true;

  let rowCounter = 0;

  return (
    <div className="content__gallery">
      <div className={`gallery__container ${"gallery__" + type} ${visibleLinks ? "gallery__with-link-labels" : ''}`}>
        {galleryRows &&
          galleryRows.map((images) =>
            <GalleryImageRow
              galleryImages={images}
              respectAspect={respectAspect}
              withLinks={withLinks}
              key={`gallery-image-row-${++rowCounter}`}
            />)
        }
      </div>
    </div>
  )
}

export default Gallery;