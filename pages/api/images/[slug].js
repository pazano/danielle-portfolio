import people from '../../../data/people';
import { images, imageSlugToId } from '../../../data/images';

import hydrateImage from '../../../lib/api_routes';

export default (req, res) => {
  const {
    query: { slug },
  } = req;
  if (imageSlugToId[slug] && images[imageSlugToId[slug]]) {
    res.status(200).json({ image: hydrateImage(images[imageSlugToId[slug]], people) })
  } else {
    res.status(404).json({ message: "Image Record Not Found"});
  }
}