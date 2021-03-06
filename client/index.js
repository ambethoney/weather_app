/*
  Import Dependencies
*/
import React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'babel-polyfill';

/*
  Import Components
*/

// import App from './components/App';
import App from './components/App';
import Dashboard from './components/Dashboard';
import Single from './components/Single';

/* Import CSS */
import css from  './styles/style.styl';

/* Import our data store */
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="/view/:cityId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
