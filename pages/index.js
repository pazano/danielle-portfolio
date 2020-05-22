import Page from '../layout/Page';
import Gallery from '../layout/components/Gallery';

const seo = {
  title: 'Home',
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
      url: 'homepage/ellerou-editorial-007.jpg',
      alt: 'Paul at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
    },
    {
      url: 'homepage/ellerou-editorial-012.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
    },
    {
      url: 'homepage/ellerou-editorial-002.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
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