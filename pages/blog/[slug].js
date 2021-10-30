import { getPostSlugs, getPostFromSlug } from '../../lib/ghost_helpers';

import Page from '../../layout/Page';
import Hero from '../../layout/components/Hero';
import PostContent from '../../layout/components/PostContent';



const Post = (props) => {
  return(
    <Page seo={props.seo}>
      <Hero
        text={props.post.title}
        image={props.post.feature_image}
        height={"medium"}
      />
      <PostContent
        html={props.post.html }
      />
    </Page>
  )
}

export default Post;

export async function getStaticPaths() {
  const posts = await getPostSlugs();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const post = await getPostFromSlug(context.params.slug);

  const seoTemp = {
    title: 'temp',
    description: '',
    keywords: ''
  }

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post, seo: seoTemp },
    revalidate: 1,
  };
}