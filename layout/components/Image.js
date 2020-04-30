import './Image.scss';

// TODO:  upgrade url to variants / srcset list

const Image = ({ url, alt }) => {

  return (
    <picture>
        <img
          src={url} alt={alt} />
    </picture>
  )
}

export default Image;