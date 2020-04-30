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
      ratio: '2x3'
    },
    {
      url: '/images/fpo/012.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      aspect: 'portrait',
      ratio: '2x3'
    },
    {
      url: '/images/fpo/001.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      aspect: 'portrait',
      ratio: '2x3'
    },
  ],
]

const galleryRows2 = [
  [
    {
      url: '/images/fpo/013.jpg',
      alt: 'Paul at the Pink Beach on Crete',
      aspect: 'landscape',
      ratio: '3x2'
    },
    {
      url: '/images/fpo/012.jpg',
      alt: 'Danielle at the Pink Beach on Crete',
      aspect: 'portrait',
      ratio: '2x3'
    },
  ],
]


const Index = () => (
  <Page seo={seo} >
    <div className="content__gallery">
      <Gallery
        galleryRows={galleryRows2}
        displayType="full"
        />
    </div>
  </Page>
);

export default Index;