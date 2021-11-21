import Link from 'next/link';
import Image from '../Image/Image';
import styles from './Gallery.module.scss';

const GalleryImageRow = ({ galleryImages, respectAspect, withLinks, rowKey }) => {

  const rowClassName = galleryImages.reduce((result, galleryImage) => result ? result + '_' + galleryImage.orientation : galleryImage.orientation, "");

  let counter = 0;
  return(
    <div className={`${styles.gallery__row} ${styles[rowClassName]}`} key={rowKey}>
      { galleryImages &&
        galleryImages.map(({ src, altText, aspectRatio, metadata }) => {
            const imageData = {
              src,
              alt: altText,
              aspectRatio,
              slug: metadata.slug,
              respectAspect,
              style: 'image_' + counter,
            }
            if (withLinks) {
              return(
                <GalleryImageLink
                  image={imageData}
                  imageKey={`gallery-image-${++counter}`}
                />
              )
            } else {
              return(
                <GalleryImage
                  image={imageData}
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
        src={image.src}
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
            src={image.src}
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

const Gallery = ({ galleryImages, type="page", withLinks=true, visibleLinks=false }) => {

  // convert list of images to rows based on aspect ratios
  let rowWeight = 0; // every row adds to four - landscape counts as 2
  let currentRow = [];

  const galleryRows = galleryImages.reduce((rowList, { image }) => {

    image = image.value.data;
    image.src = image.image;
    image.aspectRatio = image.orientation == 'portrait' ? '2x3' : '3x2';
    rowWeight = image.orientation == 'portrait' ? rowWeight + 1 : rowWeight + 2;

    if(rowWeight == 4) {
      currentRow.push(image);
      rowList.push(currentRow);
      rowWeight = 0;
      currentRow = [];
      return rowList;
    } else if (rowWeight > 4) {
      // cuts off the previous row early since we added a weight of 2 to a 3-weight row
      rowList.push(currentRow);
      rowWeight = 2;
      currentRow = [];
      currentRow.push(image);
      return rowList;
    } else {
      currentRow.push(image);
      return rowList;
    }
  }, []);

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