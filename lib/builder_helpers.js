import { hydrate } from "react-dom";

const BUILDER_PUBLIC_API_KEY = '25313235faa6499da368b5b3d484986b';

export const builderRequest = async (resourceType, resourceId) => {
  // console.log(`builderRequest(${resourceType}, ${resourceId})`)
  const responseBuilder = await fetch(
    `https://cdn.builder.io/api/v2/content/${resourceType}?apiKey=${BUILDER_PUBLIC_API_KEY}&query.id=${resourceId}`
  ).then(res => res.json());
  return responseBuilder.results;
}

export const hydrateImage = async (imageReference) => {
  let responseData = []

  responseData = await builderRequest(imageReference.model, imageReference.id);
  let { image, metadata, altText, orientation, attributions } = responseData[0].data;

  let attributionData = await Promise.all(
    attributions.map(async ({ attribution }) => {
      let attributionData = await builderRequest(attribution.model, attribution.id );
      return attributionData[0].data;
    })
  );
  // hack to match up with builder formats / be consistent with how builder returns these items
  // to the regular frontend as well as Preview
  return {
    image: {
      value: {
        data: {
          image,
          metadata,
          altText,
          orientation,
          attributions: attributionData
        }
      }
    }
  };
}

export const hydrateImageList = async (imageReferenceList) => {
  let hydratedImages = await Promise.all(
    imageReferenceList.map(async ({image}) => {
      let imageReference = { model: image.model, id: image.id}
      let imageData = await hydrateImage(imageReference);
      return imageData;
    })
  )
  return hydratedImages;
}