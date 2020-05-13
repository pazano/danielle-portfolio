import Page from '../../layout/Page';
import ImageContent from '../../layout/components/ImageContent';

const seo = {
  title: 'Image Detail',
}

const image = {
  url: '001.jpg',
  alt: 'Danielle at the Pink Beach on Crete',
  orientation: 'portrait',
  aspectRatio: '2x3',
}

const content = `
  <p>Model:  <a href="/">@modelinstagram</a></p>
  <p>Hair:  <a href="/">@hairinstagrame</a></p>
  <p>Makeup:  <a href="/">@makeup_instagrame</a></p>
`;


const ImageDetailPage = () => (
  <Page seo={seo} >
    <div className="content width__narrow">
      <ImageContent
        image={image}
        content={content}
        />
    </div>
  </Page>
);

export default ImageDetailPage;