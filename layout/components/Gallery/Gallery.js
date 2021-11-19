import Link from 'next/link';
import Image from '../Image/Image';
import styles from './Gallery.module.scss';

const GalleryImageRow = ({ galleryImages, respectAspect, withLinks, rowKey }) => {

  const rowClassName = galleryImages.reduce((result, galleryImage) => result ? result + '_' + galleryImage.orientation : galleryImage.orientation, "");

  let counter = 0;
  return(
    <div className={`${styles.gallery__row} ${styles[rowClassName]}`} key={rowKey}>
      { galleryImages &&
        galleryImages.map(({ renditions, alt, aspectRatio, metadata }) => {
            const image = {
              renditions,
              alt,
              aspectRatio,
              slug: metadata.slug,
              respectAspect,
              style: 'image_' + counter,
            }
            if (withLinks) {
              return(
                <GalleryImageLink
                  image={image}
                  imageKey={`gallery-image-${++counter}`}
                />
              )
            } else {
              return(
                <GalleryImage
                  image={image}
                  imageKey={`gallery-image-${++counter}`}
                />
              )
            }
          }
        )
      }
    </div>
  )
}

const GalleryImage = ({ image, imageKey }) => {
  return (
    <div className={`${styles.gallery__image} ${styles[image.style]}`} key={imageKey}>
      <Image
        renditions={image.renditions}
        alt={image.alt}
        aspectRatio={image.aspectRatio}
        respectAspect={image.respectAspect}
      />
    </div>
  )
}

// image:  {url, renditions, alt, style, aspectRatio, respectAspect}
// link:  {label, target, slug}
const GalleryImageLink = ({ image, imageKey }) => {
  return (
      <Link href="/photography/[slug]" as={`photography/${image.slug}`} >
        <div className={`${styles.gallery__image} ${styles.link} ${styles[image.style]}`} key={imageKey}>
          <Image
            renditions={image.renditions}
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
    <div className={styles.content__gallery}>
      <div className={`${styles.gallery__container} ${styles["gallery__" + type]} ${visibleLinks ? styles.gallery__with_link_labels : ''}`}>
        {galleryRows &&
          galleryRows.map((images) =>
            <GalleryImageRow
              galleryImages={images}
              respectAspect={respectAspect}
              withLinks={withLinks}
              rowKey={`gallery-image-row-${++rowCounter}`}
            />)
        }
      </div>
    </div>
  )
}

export default Gallery;