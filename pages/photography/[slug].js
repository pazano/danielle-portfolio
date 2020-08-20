import Page from '../../layout/Page';
import ImageContent from '../../layout/components/ImageContent';

import ImageData from '../../data/images';

const ImageDetailPage = ( { seo, image, content } ) => {
  return (
    <Page seo={seo} >
      <div className="content width__narrow">
        <ImageContent
          image={image}
          content={content}
          />
      </div>
    </Page>
  );
}

ImageDetailPage.getInitialProps = async ( { query } ) => {
  const { slug }  = query;
  const imageId = ImageData.slugToId[slug];
  const image = ImageData.portfolio[imageId];

  const { metadata } = image;

  const seo = {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    url: `https://www.ellerou.com/photography/${metadata.slug}`
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

  return {
    seo,
    image,
    content
   };
}

export default ImageDetailPage;