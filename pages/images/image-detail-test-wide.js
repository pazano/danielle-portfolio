import Page from '../../layout/Page';
import ImageContent from '../../layout/components/ImageContent';

const seo = {
  title: 'Image Detail',
}

const image = {
  url: '/images/007w.jpg',
  alt: 'Danielle at the Pink Beach on Crete',
  orientation: 'landscape',
  aspectRatio: '3x2',
}

const content = `
  <p>Hello detail</p>
  <a href="/">Go Somewhere</a>
  <p>More Detail</p>
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