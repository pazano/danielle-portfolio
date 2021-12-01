import { hydrateImageList } from '../../../lib/builder_helpers';

import Link from 'next/link';
import Image from '../Image/Image';
import styles from './Gallery.module.scss';
import { useState, useEffect } from 'react';
import { Builder } from '@builder.io/react';

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
    <div className={`gallery__image ${styles[image.style]}`} key={imageKey}>
      <Image
        src={image.src}
        alt={image.alt}
        aspectRatio={image.aspectRatio}
        respectAspect={image.respectAspect}
      />
    </div>
  )
}

const GalleryImageLink = ({ image, imageKey }) => {
  return (
      <Link href="/photography/[[...page]]" as={`photography/${image.slug}`} >
        <div className={`gallery__image link ${styles[image.style]}`} key={imageKey}>
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

const Gallery = (props) => {

  let { galleryImages, type } = props;
  let withLinks = props.withLinks || true;
  let visibleLinks = props.visibleLinks || true;

  let triggerOnce = false;

  // ensure the image records have data in Builder preview
  const [imageList, setImageList] = useState(galleryImages);

  useEffect(() => {
    async function setImageDataForPreview() {
      const hydratedImages = await hydrateImageList(galleryImages);
      hydratedImages && setImageList(hydratedImages);
    }
    Builder.isPreviewing && setImageDataForPreview();
  }, [triggerOnce]);

  triggerOnce = true;

  // convert list of images to rows based on aspect ratios
  let rowWeight = 0; // every row adds to four - landscape counts as 2
  let currentRow = [];

  const galleryRows = imageList.reduce((rowList, {image}) => {
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