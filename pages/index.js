import Page from '../layout/Page';
import Gallery from '../layout/components/Gallery';

const seo = {
  title: 'Home',
  description: '',
  keywords: ''
}

/*
      link: {
        target: '/images/image-detail-test',
        slug: 'images/image-detail-test',
        label: 'One'
      }
*/

const galleryRows2 = [
  [
    {
      url: 'homepage/ellerou-editorial-mikaela-katrina.jpg',
      alt: 'Studio Beauty Portrait of Mikaela Katrina',
      orientation: 'portrait',
      aspectRatio: '2x3',
      link: {
        target: '/images/mikaela-katrina-studio-beauty',
        slug: 'images/mikaela-katrina-studio-beauty',
      }
    },
    {
      url: 'homepage/ellerou-editorial-chloe-kono.jpg',
      alt: 'Desert Fashion Editorial at Vasquez Rocks with Chloe Kono',
      orientation: 'portrait',
      aspectRatio: '2x3',
      link: {
        target: '/images/chloe-kono-vasquez-rocks',
        slug: 'images/chloe-kono-vasquez-rocks',
      }
    },
    {
      url: 'homepage/ellerou-editorial-jaren-crews-shutter-drag.jpg',
      alt: 'Studio Session with Jaren Crews',
      orientation: 'portrait',
      aspectRatio: '2x3',
      link: {
        target: '/images/jaren-crews-studio-shutter-drag',
        slug: 'images/jaren-crews-studio-shutter-drag',
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