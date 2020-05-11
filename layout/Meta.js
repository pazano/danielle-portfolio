
import Head from 'next/head';

const Meta = ({seo}) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>{`${seo.title} | Danielle Rouillard Photography`}</title>
  </Head>
)

export default Meta;