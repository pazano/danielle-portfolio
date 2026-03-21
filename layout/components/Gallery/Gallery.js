import { hydrateImageList } from '../../../lib/builder_helpers';
import { sortGalleryRows } from '../../../lib/layout_helpers';

import Link from 'next/link';
import Image from '../Image/Image';
import GalleryModal from '../GalleryModal/GalleryModal';
import styles from './Gallery.module.scss';
import { useState, useEffect } from 'react';
import { Builder } from '@builder.io/react';

const GalleryImageRow = ({ galleryImages, respectAspect, rowKey, onImageClick }) => {

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
            return(
              <GalleryImageLink
                image={imageData}
                imageKey={`gallery-image-${++counter}`}
                onImageClick={onImageClick}
              />
            )
          }
        )
      }
    </div>
  )
}

const GalleryImageLink = ({ image, imageKey, onImageClick }) => {
  return (
      <Link href="/photography/[[...page]]" as={`photography/${image.slug}`} passHref>
        <a
          className={`gallery__image link ${styles[image.style]}`}
          onClick={(e) => { e.preventDefault(); onImageClick(image.slug); }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            aspectRatio={image.aspectRatio}
            respectAspect={image.respectAspect}
          />
        </a>
      </Link>
  )
}


// Gallery
//    Type indicates layout width -- Hero uses smaller gutters than Page
//    Links looks to display a label and link over Gallery entries

const Gallery = (props) => {
  console.log(props);
  let { galleryImages, type } = props;
  let visibleLinks = props.visibleLinks || false;

  // ensure the image records have data in Builder preview
  const [imageList, setImageList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function setImageDataForPreview() {
      const hydratedImages = await hydrateImageList(galleryImages);
      hydratedImages && setImageList(hydratedImages);
    }
    Builder.isPreviewing ? setImageDataForPreview() : setImageList(galleryImages);
  }, [galleryImages]);

  // convert list of images to rows based on aspect ratios
  const galleryRows = sortGalleryRows(imageList, 4);

  // flat list of the transformed image objects (with src, metadata, attributions, etc.)
  // that appear in the gallery — used for modal navigation
  const flatImageList = galleryRows.flat();

  const handleImageClick = (slug) => {
    const index = flatImageList.findIndex(img => img.metadata?.slug === slug);
    if (index !== -1) {
      setActiveIndex(index);
      setModalOpen(true);
    }
  };

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
              rowKey={`gallery-image-row-${++rowCounter}`}
              onImageClick={handleImageClick}
            />)
        }
      </div>

      {modalOpen && flatImageList.length > 0 && (
        <GalleryModal
          images={flatImageList}
          startIndex={activeIndex}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  )
}

export default Gallery;
