import people from '../../data/people';
import images from '../../data/images';

import hydrateImageResponse from '../../lib/api_routes';

const hydratedImages = hydrateImageResponse(images, people);

export default (req, res) => {
  res.status(200).json({ images: hydratedImages })
}