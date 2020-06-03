import Page from '../../layout/Page';
import ImageContent from '../../layout/components/ImageContent';

const seo = {
  title: 'Natural Smokey Eye Glam',
  description: '',
  keywords: ''
}

const image = {
  url: 'homepage/ellerou-editorial-mikaela-katrina.jpg',
  alt: 'Studio Beauty Portrait of Mikaela Katrina',
  orientation: 'portrait',
  aspectRatio: '2x3',
}

const content = `
<dl>
  <dt>Photographer</dt>
  <dd>Danielle Rouillard  <a href="https://instagram.com/ellerouphoto">@ellerouphoto</a></dd>
  <dt>Model</dt>
  <dd>Mikaela Katrina  <a href="https://instagram.com/mikaelakatrina">@mikaelakatrina</a></dd>
  <dt>HMUA</dt>
  <dd>Hiromi Robertson  <a href="https://instagram.com/smacbeauteartistry">@smacbeauteartistry</a></dd>
</dl>
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