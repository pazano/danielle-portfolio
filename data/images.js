const imageList = [
  {
    id: 0,
    metadata: {
      title: 'Desert Fashion Editorial',
      description: '',
      keywords: '',
      slug: 'dreamy-natural-glam-beauty'
    },
    attributes: {
      url: 'homepage/ellerou-editorial-chloe-kono.jpg',
      alt: 'Desert Fashion Editorial at Vasquez Rocks with Chloe Kono',
      orientation: 'portrait',
      aspectRatio: '2x3',
      attribution: ["danielle_rouillard", "chloe_kono", "geo_mendi"]
    }
  }, {
    id: 1,
    metadata: {
      title: 'Desert Fashion Editorial',
      description: '',
      keywords: '',
      slug: 'california-desert-sun-fashion'
    },
    attributes: {
      url: 'homepage/ellerou-editorial-chloe-kono.jpg',
      alt: 'Desert Fashion Editorial at Vasquez Rocks with Chloe Kono',
      orientation: 'portrait',
      aspectRatio: '2x3',
      attribution: ["danielle_rouillard", "chloe_kono", "geo_mendi"]
    }
  }
]

const imageListWithRenditions = imageList.map((image) => {
  const imageCopy = {...image}
  const renditions = require(`../public/images/${imageCopy.attributes.url}?resize`);
  imageCopy.attributes['renditions'] = renditions;
  return imageCopy;
})

const imageSlugToId = imageList.reduce((imageMap, image) => {
  imageMap[image.metadata.slug] = image.id;
  return imageMap;
}, {});

export default {
  list: imageListWithRenditions,
  slugToId: imageSlugToId,
}