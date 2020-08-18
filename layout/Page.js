import { withRouter } from 'next/router';

import Meta from './Meta.js';
import Header from './Header.js';
import Footer from './Footer.js';

import './Page.scss';

export default withRouter( ({ seo, children }) => (
    <div className="main">
        <Meta seo={seo} />
        <div className="page">
          <Header />
            { children }
          <Footer />
        </div>
      </div>
  )
);