import { builder, BuilderComponent, Builder } from '@builder.io/react';

import Page from '../layout/Page';
import '../layout/components/BuilderComponents';

const BuilderPage = (props) => (
  <Page seo={{
    title: props.content.data.title,
    description: props.content.data.description,
    keywords: props.content.data.keywords
  }}>
    {props.content || Builder.isPreviewing ?
      <BuilderComponent
        content={props.content}
        model="page" />
      : <>Foobar</>}
  </Page>
)

export default BuilderPage;

export const getStaticProps = async (context) => {
  const content = await builder.get('page', { url: '/' + context.params.page[0] }).promise();

  console.warn('Content')
  console.log(content)

  return {
    props: { content },
    revalidate: true,
    notFound: !content
  }
}

export const getStaticPaths = async () => {
  const results = await builder.getAll('page', {
    fields: 'data.url',
    options: {
      noTargeting: true,
    },
  });

  return {
    paths: results.map((item) => ({
      params: {
        page: [item.data.url.substr(1)],
      },
    })),
    fallback: true,
  };
};