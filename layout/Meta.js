
import Head from 'next/head';

const Meta = ({seo}) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>{`${seo.title} | Paul + Danielle`}</title>
  </Head>
)

export default Meta;