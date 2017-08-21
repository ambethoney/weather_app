/*
  Import Dependencies
*/
import React from 'react';
import { render } from 'react-dom';
//import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import 'babel-polyfill';

/*
  Import Components
*/
// import App from './components/App';
import Main from './components/Main';
import WeatherCards from './components/WeatherCards';
import Single from './components/Single';

/* Import CSS */
import css from  './styles/style.styl';

/* Import our data store */
//import store, { history } from './store';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={WeatherCards}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));



// <Provider store={store}>
//   { /* Tell the Router to use our enhanced history */ }
//   <Router history={history}>
//     <Route path="/" component={App}>
//       <IndexRoute component={WeatherCards} />
//       <Route path="/view/:postId" component={Single}></Route>
//     </Route>
//   </Router>
// </Provider>,
