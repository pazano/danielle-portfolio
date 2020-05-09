import Page from '../layout/Page';
import TitleCard from '../layout/components/TitleCard';
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


const Portfolio = () => (
  <Page seo={seo} >
    <TitleCard title="Portfolio" />
    <div className="content__gallery">
      <Gallery
        galleryRows={portfolioLinks}
        type="hero"
        displayLinks={true}
        />
    </div>
  </Page>
);

export default Portfolio;