import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { builder } from '@builder.io/react';

import { GA_TRACKING_ID } from '../lib/tracking';

builder.init('25313235faa6499da368b5b3d484986b');

export default class extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}