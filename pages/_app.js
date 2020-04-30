import App from 'next/app'
import Router from 'next/router'

import * as tracking from '../lib/tracking'

Router.events.on('routeChangeComplete', url => tracking.pageview(url))

export default App