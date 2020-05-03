import Page from '../layout/Page';
import Gallery from '../layout/components/Gallery';

const seo = {
  title: 'Portfolio',
}

const portfolioLinks = [
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


const Index = () => (
  <Page seo={seo} >
    <div className="content__gallery">
      <Gallery
        galleryRows={portfolioLinks}
        type="hero"
        links={true}
        />
    </div>
  </Page>
);

export default Index;