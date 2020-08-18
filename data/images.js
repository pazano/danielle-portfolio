
// TODO:  Need a structure for publishing references

const imageList = [
  {
    id: 0,
    metadata: {
      title: 'Dreamy Natural Glam | Beauty Photography, Los Angeles',
      description: 'Natural glam highlighted in studio beauty photography of model by Los Angeles photographer Danielle Rouillard',
      keywords: 'los angeles beauty photographer, los angeles commercial photography, los angeles commercial beauty photographer, los angeles commercial beauty photography, southern california beauty photographer, west la studio photographer, west los angeles portrait photographer, natural makeup beauty campaign, natural beauty face photography, female model los angeles photographer, los angeles model photographer, los angeles beauty photographer and retoucher, los angeles beauty retoucher, danielle rouillard photography, elle rou photography, brunette model beauty photography, elle rou',
      slug: 'dreamy-natural-glam-beauty'
    },
    url: 'homepage/ellerou-editorial-000.jpg',
    alt: 'Up close retouched image of model with neutral makeup photographed by Danielle Rouillard',
    orientation: 'portrait',
    aspectRatio: '2x3',
    attribution: ["danielle_rouillard", "mikaela_katrina", "hiromi_robertson"]
  }, {
    id: 1,
    metadata: {
      title: 'Desert Dreaming | Fashion Photography, Los Angeles',
      description: 'High fashion editorial photography in the Los Angeles Desert by fashion and commercial photographer Danielle Rouillard',
      keywords: 'los angeles fashion photographer, los angeles commercial photography, los angeles commercial fashion photographer, los angeles commercial fashion photography, southern california fashion photographer, west la studio photographer, west los angeles portrait photographer, vasquez rocks fashion photoshoot, vasquez rocks fashion editorial, female model photographer in los angeles, female model los angeles photographer, los angeles model photographer, asian model desert photoshoot, los angeles asian model editorial, danielle rouillard photography, elle rou photography, asian model fashion photography, elle rou',
      slug: 'california-desert-sun-fashion'
    },
    url: 'homepage/ellerou-editorial-001.jpg',
    alt: 'Fashion editorial photoshoot with Asian model in California desert photographed by Danielle Rouillard',
    orientation: 'portrait',
    aspectRatio: '2x3',
    attribution: ["danielle_rouillard", "chloe_kono", "geo_mendi"]
  }, {
    id: 2,
    metadata: {
      title: 'Perspective | Double Exposure | Los Angeles Portrait ',
      description: 'Double exposure fashion portraiture by Los Angeles Photographer Danielle Rouillard',
      keywords: 'los angeles fashion photographer, los angeles commercial photography, los angeles commercial fashion photographer, los angeles commercial fashion photography, southern california beauty photographer, los angeles portrait photographer, in studio double exposure photography, west la studio photographer, west los angeles portrait photographer, los angeles model photographer, male model studio photoshoot, black male model, black male model los angeles, double exposure black male model, double exposure editorial photography',
      slug: 'perspective-male-beauty'
    },
    url: 'homepage/ellerou-editorial-002.jpg',
    alt: 'In studio double exposure beauty photography of a black male model by photographer Danielle Rouillard',
    orientation: 'portrait',
    aspectRatio: '2x3',
    attribution: ["danielle_rouillard", "jaren_crews"]
  }, {
    id: 3,
    metadata: {
      title: 'Vintage Desert Neutrals | Los Angeles Fashion Editorial',
      description: '',
      keywords: '',
      slug: 'vintage-desert-neutrals-fashion'
    },
    url: 'homepage/ellerou-editorial-003.jpg',
    alt: '',
    orientation: 'portrait',
    aspectRatio: '2x3',
    attribution: ["danielle_rouillard", "kimmy_jenkins", "hiromi_robertson", "natalie_jutakeo"]
  }, {
    id: 4,
    metadata: {
      title: '',
      description: '',
      keywords: '',
      slug: 'image-004'
    },
    url: 'homepage/ellerou-editorial-004.jpg',
    alt: '',
    orientation: 'portrait',
    aspectRatio: '2x3',
    attribution: ["danielle_rouillard"]
  }, {
    id: 5,
    metadata: {
      title: '',
      description: '',
      keywords: '',
      slug: 'image-005'
    },
    url: 'homepage/ellerou-editorial-005.jpg',
    alt: '',
    orientation: 'portrait',
    aspectRatio: '2x3',
    attribution: ["danielle_rouillard"]
  }, {
    id: 6,
    metadata: {
      title: '',
      description: '',
      keywords: '',
      slug: 'image-006'
    },
    url: 'homepage/ellerou-editorial-006.jpg',
    alt: '',
    orientation: 'portrait',
    aspectRatio: '2x3',
    attribution: ["danielle_rouillard"]
  }, {
    id: 7,
    metadata: {
      title: '',
      description: '',
      keywords: '',
      slug: 'image-007'
    },
    url: 'homepage/ellerou-editorial-007.jpg',
    alt: '',
    orientation: 'portrait',
    aspectRatio: '2x3',
    attribution: ["danielle_rouillard"]
  }, {
    id: 8,
    metadata: {
      title: '',
      description: '',
      keywords: '',
      slug: 'image-008'
    },
    url: 'homepage/ellerou-editorial-008.jpg',
    alt: '',
    orientation: 'portrait',
    aspectRatio: '2x3',
    attribution: ["danielle_rouillard"]
  }, {
    id: 9,
    metadata: {
      title: '',
      description: '',
      keywords: '',
      slug: 'image-009'
    },
    url: 'homepage/ellerou-editorial-009.jpg',
    alt: '',
    orientation: 'portrait',
    aspectRatio: '2x3',
    attribution: ["danielle_rouillard"]
  }, {
    id: 10,
    metadata: {
      title: '',
      description: '',
      keywords: '',
      slug: 'image-010'
    },
    url: 'homepage/ellerou-editorial-010.jpg',
    alt: '',
    orientation: 'portrait',
    aspectRatio: '2x3',
    attribution: ["danielle_rouillard"]
  }, {
    id: 11,
    metadata: {
      title: '',
      description: '',
      keywords: '',
      slug: 'image-011'
    },
    url: 'homepage/ellerou-editorial-011.jpg',
    alt: '',
    orientation: 'portrait',
    aspectRatio: '2x3',
    attribution: ["danielle_rouillard"]
  }

]

const imageListWithRenditions = imageList.map((image) => {
  const imageCopy = {...image}
  const renditions = require(`../public/images/${imageCopy.url}?resize`);
  imageCopy['renditions'] = renditions;
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