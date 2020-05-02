import Page from '../layout/Page';
import Gallery from '../layout/components/Gallery';

const seo = {
  title: 'Home',
}

const galleryRows = [
  [
    {
      url: '/images/fpo/010.jpg',
      alt: 'Paul at the Pink Beach on Crete',
      aspect: 'portrait',
      ratio: '2x3',
      label: 'Fashion',
      link: '/',
    },
    {
      url: '/images/fpo/012.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      aspect: 'portrait',
      ratio: '2x3',
      label: 'Beauty',
      link: '/',
    },
    {
      url: '/images/fpo/009.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      aspect: 'portrait',
      ratio: '2x3',
      label: 'Headshots',
      link: '/',
    },
  ],
]

const gallery4up = [
  [
    {
      url: '/images/fpo/009.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      aspect: 'portrait',
      ratio: '2x3',
      label: 'Headshots',
      link: '/',
    },
    {
      url: '/images/fpo/010.jpg',
      alt: 'Paul at the Pink Beach on Crete',
      aspect: 'portrait',
      ratio: '2x3',
      label: 'Fashion',
      link: '/',
    },
    {
      url: '/images/fpo/012.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      aspect: 'portrait',
      ratio: '2x3',
      label: 'Beauty',
      link: '/',
    },
    {
      url: '/images/fpo/010.jpg',
      alt: 'Paul at the Pink Beach on Crete',
      aspect: 'portrait',
      ratio: '2x3',
      label: 'Fashion',
      link: '/',
    },
  ],
  [
    {
      url: '/images/fpo/009.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      aspect: 'portrait',
      ratio: '2x3',
      label: 'Headshots',
      link: '/',
    },
    {
      url: '/images/fpo/010.jpg',
      alt: 'Paul at the Pink Beach on Crete',
      aspect: 'portrait',
      ratio: '2x3',
      label: 'Fashion',
      link: '/',
    },
    {
      url: '/images/fpo/012.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      aspect: 'portrait',
      ratio: '2x3',
      label: 'Beauty',
      link: '/',
    },
    {
      url: '/images/fpo/010.jpg',
      alt: 'Paul at the Pink Beach on Crete',
      aspect: 'portrait',
      ratio: '2x3',
      label: 'Fashion',
      link: '/',
    },
  ]
]

const galleryRows2 = [
  [
    {
      url: '/images/fpo/013.jpg',
      alt: 'Paul at the Pink Beach on Crete',
      aspect: 'landscape',
      ratio: '3x2',
      label: 'Module One',
      link: '/',
    },
    {
      url: '/images/fpo/012.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      aspect: 'portrait',
      ratio: '2x3',
      label: 'Module Two',
      link: '/',
    },
  ],
]


const Index = () => (
  <Page seo={seo} >
    <div className="content__gallery">
      <Gallery
        galleryRows={gallery4up}
        type="hero"
        links={false}
        />
    </div>
  </Page>
);

export default Index;