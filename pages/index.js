import { builder, BuilderComponent, Builder } from '@builder.io/react';

import Page from '../layout/Page';

const Index = (props) => (
  <Page seo={{
    title: 'test',
    description: '',
    keywords: ''
  }}>
    {props.content || Builder.isPreviewing ?
      <BuilderComponent
        content={props.content}
        model="page" />
      : <>Foobar</>}
  </Page>
)

export default Index;

export const getStaticProps = async () => {
  const content = await builder.get('page', { url: '/index' }).promise();

  return {
    props: { content },
    revalidate: true,
    notFound: !content
  }
}