import Page from '../../layout/Page';
import Hero from '../../layout/components/Hero';

const BlogIndex = ( { seo } ) => {
  return(
    <Page seo={seo}>

    </Page>
  )
}


export async function getStaticProps() {
  const seo = {
    title: 'Blog Index',
    description: '',
    keywords: ''
  }

  return {
    props: {
      seo,
      galleryImages: galleryRows
    }
  }
}

export default BlogIndex;
