import Page from '../layout/Page';
import Gallery from '../layout/components/Gallery';

import ImageData from '../data/images';

const Index = ( { seo, galleryImages } ) => {
  return (
    <Page seo={seo} >
      <Gallery
        galleryRows={galleryImages}
        type="hero"
        withLinks={true}
        />
    </Page>
  );
};

export async function getStaticProps() {
  const seo = {
    title: 'Home',
    description: '',
    keywords: ''
  }
  const galleryIds = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
  ]
  // TODO: don't depend on the fact the images list is presorted
  const galleryRows = galleryIds.map(row => row.map(id => ImageData.portfolio[id]));

  return {
    props: {
      seo,
      galleryImages: galleryRows
    }
  }
}

export default Index;