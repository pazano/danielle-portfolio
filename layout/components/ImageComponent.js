import './ImageComponent.scss';
import Image from 'next/image';

const ImageComponent = ({ url, alt, aspectRatio, respectAspect, style = '' }) => {

  if(respectAspect) {

    const splitParams = aspectRatio && aspectRatio.split("x");
    const viewBoxParams = splitParams[0] + " " + splitParams[1];

    return (
      <div className={`image__respect-aspect ${style}`}>
        <svg viewBox={`0 0 ${viewBoxParams}`}></svg>
        <picture>
          {/* <Image src={url} alt={alt} width={splitParams[0] * 500} height={splitParams[1] * 500} /> */}
          <Image src={url} alt={alt} unsized={true} />
        </picture>
      </div>
    )
  }
  else {
    return (
      <div className={style}>
        <picture>
          {/* <Image src={`${url}`} alt={alt} width={splitParams[0] * 500} height={splitParams[1] * 500} /> */}
          <Image src={url} alt={alt} unsized={true} />
        </picture>
      </div>
    )
  }
}

export default ImageComponent;