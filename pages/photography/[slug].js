import Page from '../../layout/Page';
import ImageContent from '../../layout/components/ImageContent';

import ImageData from '../../data/images';
import PeopleData from '../../data/people';

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

// ImageDetailPage.getInitialProps = async ( { query } ) => {
  // const { slug } = query;
export async function getStaticProps( { params } ) {
  const { slug }  = params;
  const imageId = ImageData.slugToId[slug];
  const image = ImageData.portfolio[imageId];

  const { metadata } = image;

  const seo = {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    url: `https://www.ellerou.com/photography/${metadata.slug}`
  }

  let attribution = '<dl>';
  attribution += image.attribution.reduce((content, reference) => {
    let record = PeopleData[reference];
    content += `
      <dt>${record.role}</dt>
      <dd>${record.name} <a href="https://instagram.com/${record.instagram}">@${record.instagram}</a></dd>
    `
    return content;
  }, '')
  attribution += '</dl>'

  return {
    props: {
      seo,
      image,
      content: attribution
    }
   };
}

export async function getStaticPaths() {
  const paths = ImageData.portfolio.map((image) => ({
    params: { slug: image.metadata.slug }
  }));

  return {
    paths,
    fallback: false,
  }
}

export default ImageDetailPage;