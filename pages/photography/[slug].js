import Page from '../../layout/Page';
import ImageContent from '../../layout/components/ImageContent';

import Images from '../../data/images';

const seo = {
  title: 'Dreamy Natural Glam | Beauty Photography, Los Angeles',
  description: 'Natural glam highlighted in studio beauty photography of model by Los Angeles photographer Danielle Rouillard',
  keywords: 'los angeles beauty photographer, los angeles commercial photography, los angeles commercial beauty photographer, los angeles commercial beauty photography, southern california beauty photographer, west la studio photographer, west los angeles portrait photographer, natural makeup beauty campaign, natural beauty face photography, female model los angeles photographer, los angeles model photographer, los angeles beauty photographer and retoucher, los angeles beauty retoucher, danielle rouillard photography, elle rou photography, brunette model beauty photography',
  url: 'https://www.ellerou.com/images/mikaela-katrina-studio-beauty'
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


const ImageDetailPage = ( { image, content } ) => {
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
  const imageId = Images.slugToId[slug];

  return {
    image: Images.list[imageId],
    content: content
   };
}

export default ImageDetailPage;