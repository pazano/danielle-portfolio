import Image from '../Image/Image';
import styles from './ImageContent.module.scss';

const ImageContent = ({ image, alt="temp", orientation="portrait", respectAspect=true, content, imageSide="left", contentBackground=false }) => {
  return (
    <div className="content width__narrow">
      <div className={`${styles.module__image_content} ${styles['module__image_content__' + orientation + '_' + imageSide]}`}>
        <Image
          src={image}
          alt={alt}
          aspectRatio={orientation == 'portrait' ? '2x3' : '3x2'}
          respectAspect={respectAspect}
          style={styles.module__image_content__image}
        />
        <div className={`${styles.module__image_content__content} ${contentBackground ? styles.module__image_content__bgcolor : ''}`}>
          <div className={styles.module__image_content__content_inner} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  )
}

export default ImageContent;