import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import Page from './components/Page';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';

const browserHistory = createBrowserHistory();

const App = () => {
  console.log('---------------------');
  return (
    <Page>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </Page>
  );
};

export default App;
