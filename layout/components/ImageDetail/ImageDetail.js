import Image from '../Image/Image';
import styles from './ImageContent.module.scss';

const ImageDetail = ({portfolioImage, imageSide, contentBackground=false}) => {
  let { image, orientation, altText, attributions} = portfolioImage.value.data;

  // TODO:  attribution references do not contain the object information

  // console.log(attributions)

  // let attributionPrep = attributions.map((attribution) => {
  //   let counter = 1;
  //   attribution.rolesList = attribution.role.reduce((rolesList, role) => {
  //     if(counter == attribution.role.length) {
  //       return rolesList + role;
  //     }
  //     else{
  //       counter++;
  //       return rolesList + role + ', ';
  //     }
  //   })
  //   return attribution;
  // })

  return (
    <div className="content width__narrow">
      <div className={`${styles.module__image_content} ${styles['module__image_content__' + orientation + '_' + imageSide]}`}>
        <Image
          src={image}
          alt={altText}
          aspectRatio={orientation == 'portrait' ? '2x3' : '3x2'}
          respectAspect={false}
          style={styles.module__image_content__image}
        />
        <div className={`${styles.module__image_content__content} ${contentBackground ? styles.module__image_content__bgcolor : ''}`}>
          <div className={styles.module__image_content__content_inner} >
            <dl>
              <dt>photographer, retoucher</dt>
              <dd>Danielle Rouillard <a href="https://instagram.com/ellerouphoto">@ellerouphoto</a></dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageDetail;