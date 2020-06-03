
import Head from 'next/head';

const Meta = ({seo}) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta description={seo.description} />
    <meta keywords={seo.keywords} />
    <title>{`${seo.title} | Elle Rou Photography`}</title>
  </Head>
)

export default Meta;