import Page from '../layout/Page';
import Gallery from '../layout/components/Gallery';

const seo = {
  title: 'Home',
  description: '',
  keywords: ''
}

/*
      link: {
        target: '/photography/image-detail-test',
        slug: 'photography/image-detail-test',
        label: 'One'
      }
*/

const galleryRows2 = [
  [
    {
      url: 'homepage/ellerou-editorial-mikaela-katrina.jpg',
      alt: 'Up close retouched image of model with neutral makeup photographed by Danielle Rouillard',
      orientation: 'portrait',
      aspectRatio: '2x3',
      link: {
        target: '/photography/dreamy-natural-glam-beauty',
        slug: 'photography/dreamy-natural-glam-beauty',
      }
    },
    {
      url: 'homepage/ellerou-editorial-chloe-kono.jpg',
      alt: 'Fashion editorial photoshoot with Asian model in California desert photographed by Danielle Rouillard',
      orientation: 'portrait',
      aspectRatio: '2x3',
      link: {
        target: '/photography/california-desert-sun-fashion',
        slug: 'photography/california-desert-sun-fashion',
      }
    },
    {
      url: 'homepage/ellerou-editorial-jaren-crews-shutter-drag.jpg',
      alt: 'Studio Session with Jaren Crews',
      orientation: 'portrait',
      aspectRatio: '2x3',
      link: {
        target: '/photography/jaren-crews-studio-shutter-drag',
        slug: 'photography/jaren-crews-studio-shutter-drag',
      }
    },
    {
      url: 'homepage/ellerou-editorial-005.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
    },
  ],
  [
    {
      url: 'homepage/ellerou-editorial-011.jpg',
      alt: 'Paul at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
    },
    {
      url: 'homepage/ellerou-editorial-008.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
    },
    {
      url: 'homepage/ellerou-editorial-010.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
    },
    {
      url: 'homepage/ellerou-editorial-001.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
    },
  ],
  [
    {
      url: 'homepage/ellerou-editorial-006.jpg',
      alt: 'Paul at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
    },
    {
      url: 'homepage/ellerou-editorial-004.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
    },
    {
      url: 'homepage/ellerou-editorial-003.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
    },
    {
      url: 'homepage/ellerou-editorial-013.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
    },
  ],
]


const Index = () => (
  <Page seo={seo} >
    <Gallery
      galleryRows={galleryRows2}
      type="hero"
      />
  </Page>
);

export default Index;