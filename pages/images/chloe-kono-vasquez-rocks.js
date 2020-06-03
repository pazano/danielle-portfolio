import Page from '../../layout/Page';
import ImageContent from '../../layout/components/ImageContent';

const seo = {
  title: 'Desert Fashion Editorial',
  description: '',
  keywords: ''
}

const image = {
  url: 'homepage/ellerou-editorial-chloe-kono.jpg',
  alt: 'Desert Fashion Editorial at Vasquez Rocks with Chloe Kono',
  orientation: 'portrait',
  aspectRatio: '2x3',
}

const content = `
<dl>
  <dt>Photographer</dt>
  <dd>Danielle Rouillard <a href="https://instagram.com/ellerouphoto">@ellerouphoto</a></dd>
  <dt>Model</dt>
  <dd>Chloe Kono <a href="https://instagram.com/chloekono">@chloekono</a></dd>
  <dt>HMUA</dt>
  <dd>Geo Mendi <a href="https://instagram.com/beautybygeomendi">@beautybygeomendi</a></dd>
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