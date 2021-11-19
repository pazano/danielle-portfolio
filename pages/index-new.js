import { builder, BuilderComponent, Builder } from '@builder.io/react';

import Page from '../layout/Page';

builder.init('25313235faa6499da368b5b3d484986b');

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