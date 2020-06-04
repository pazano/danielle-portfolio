import Page from '../../layout/Page';
import ImageContent from '../../layout/components/ImageContent';

const seo = {
  title: 'Studio Portrait Session',
  description: '',
  keywords: ''
}

const image = {
  url: 'homepage/ellerou-editorial-jaren-crews-shutter-drag.jpg',
  alt: 'Studio Session with Jaren Crews',
  orientation: 'portrait',
  aspectRatio: '2x3',
}

const content = `
<dl>
  <dt>Photographer</dt>
  <dd>Danielle Rouillard <a href="https://instagram.com/ellerouphoto">@ellerouphoto</a></dd>
  <dt>Model</dt>
  <dd>Jaren Crews <a href="https://instagram.com/real.jaren">@real.jaren</a></dd>
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