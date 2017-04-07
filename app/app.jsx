var React = require('react'),
    ReactDOM = require('react-dom'),
    Main = require('Main'),
    Nav = require('Nav');

var { 
  Route, 
  Router, 
  IndexRoute, 
  hashHistory 
  } = require('react-router');
  
ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main}></Route>

  </Router>,

  document.getElementById('app')
);




