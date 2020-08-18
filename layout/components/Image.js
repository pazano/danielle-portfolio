import './Image.scss';


const buildSizeList = (responsiveLoaderObject, stretchTolerance) => {
  let counter = 1;
  return responsiveLoaderObject.images.reduce((sizeList, {width}) => {
    if(counter == responsiveLoaderObject.images.length) {
      return sizeList + `${width}px`;
    } else {
      counter++;
      return sizeList + `(max-width: ${width + width * (stretchTolerance / 100)}px) ${width}px, `;
    }
  }, "")
}


// const Image = ({ url, alt, aspectRatio, respectAspect, style='' }) => {

  // const image = require(`../../public/images/${url}?resize`);

const Image = ({ renditions, alt, aspectRatio, respectAspect, style = '' }) => {

  if(respectAspect) {

    const splitParams = aspectRatio && aspectRatio.split("x");
    const viewBoxParams = splitParams[0] + " " + splitParams[1];

    const sizeList = buildSizeList(renditions, 20);

    return (
      <div className={`image__respect-aspect ${style}`}>
        <svg viewBox={`0 0 ${viewBoxParams}`}></svg>
        <picture>
          <img
            srcSet={renditions.srcSet}
            sizes={sizeList}
            src={renditions.src} alt={alt} />
        </picture>
      </div>
    )
  }
  else {
    return (
      <div className={style}>
        <picture>
          <img
            srcSet={renditions.srcSet}
            sizes={sizeList}
            src={renditions.src} alt={alt} />
        </picture>
      </div>
    )
  }
}

export default Image;