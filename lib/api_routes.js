const hydrateImageList = (images, people) => {
  return images.map(imageRecord => {
    imageRecord.image.attribution = imageRecord.image.attribution.map(personId => people[personId]);
    return imageRecord;
  })
}

const hydrateImage = (image, people) => {
  image.image.attribution = image.image.attribution.map(personId => people[personId]);
  return image;
}

export default {
  hydrateImageList,
  hydrateImage
}