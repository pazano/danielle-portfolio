const images = [
  {
    id: 0,
    metadata: {
      title: 'Desert Fashion Editorial',
      description: '',
      keywords: '',
      slug: 'dreamy-natural-glam-beauty'
    },
    image: {
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
    image: {
      url: 'homepage/ellerou-editorial-chloe-kono.jpg',
      alt: 'Desert Fashion Editorial at Vasquez Rocks with Chloe Kono',
      orientation: 'portrait',
      aspectRatio: '2x3',
      attribution: ["danielle_rouillard", "chloe_kono", "geo_mendi"]
    }
  }
]

const imageSlugToId = images.reduce((imageMap, image) => {
  imageMap[image.metadata.slug] = image.id;
  return imageMap;
}, {});

export default {
  list: images,
  slugToId: imageSlugToId,
}