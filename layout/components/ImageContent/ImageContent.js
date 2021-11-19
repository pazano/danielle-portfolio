import Image from '../Image/Image';
import styles from './ImageContent.module.scss';

const ImageContent = ({ image, orientation="portrait", content, imageSide="left", contentBackground=false }) => {
  console.log('Builder Image Looks Like \n', image)
  return (
    <div className={`${styles.module__image_content} ${styles['module__image_content__' + orientation + '-' + imageSide]}`}>
      {/* <Image
        renditions={image.renditions}
        alt={image.alt}
        aspectRatio={image.aspectRatio}
        respectAspect={true}
        style={styles.module__image_content__image}
      /> */}
      <div className={`${styles.module__image_content__content} ${contentBackground && styles.module__image_content__bgcolor}`}>
        <div className={styles.module__image_content__content_inner} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

export default ImageContent;