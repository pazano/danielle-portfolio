import Page from '../layout/Page';
import Gallery from '../layout/components/Gallery';

const seo = {
  title: 'Home',
}

const galleryRows2 = [
  [
    {
      url: '/images/001.jpg',
      alt: 'Paul at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
    },
    {
      url: '/images/001.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
      link: {
        target: '/portfolio',
        label: 'One'
      }
    },
    {
      url: '/images/001.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
      link: {
        target: '/',
        label: 'One'
      }
    },
    {
      url: '/images/001.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
      link: {
        target: '/',
        label: 'One'
      }
    },
  ],
  [
    {
      url: '/images/001.jpg',
      alt: 'Paul at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
      link: {
        target: '/',
        label: 'One'
      }
    },
    {
      url: '/images/001.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
      link: {
        target: '/',
        label: 'One'
      }
    },
    {
      url: '/images/001.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
      link: {
        target: '/',
        label: 'One'
      }
    },
    {
      url: '/images/001.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      orientation: 'portrait',
      aspectRatio: '2x3',
      link: {
        target: '/',
        label: 'One'
      }
    },
  ],
]


const Index = () => (
  <Page seo={seo} >
    <div className="content__gallery">
      <Gallery
        galleryRows={galleryRows2}
        type="hero"
        />
    </div>
  </Page>
);

export default Index;