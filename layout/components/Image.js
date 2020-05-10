import './Image.scss';

// TODO:  upgrade url to variants / srcset list

const Image = ({ url, alt, aspectRatio, respectAspect, style='' }) => {

  if(respectAspect) {

    const splitParams = aspectRatio && aspectRatio.split("x");
    const viewBoxParams = splitParams[0] + " " + splitParams[1];

    return (
      <div className={`image__respect-aspect ${style}`}>
        <svg viewBox={`0 0 ${viewBoxParams}`}></svg>
        <picture>
          <img
            src={url} alt={alt} />
        </picture>
      </div>
    )
  }
  else {
    return (
      <div className={style}>
        <picture>
          <img
            src={url} alt={alt} />
        </picture>
      </div>
    )
  }
}

export default Image;