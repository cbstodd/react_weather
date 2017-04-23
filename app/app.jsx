const { Route, Router, IndexRoute, hashHistory } = require('react-router');
const React        = require('react'),
      ReactDOM     = require('react-dom'),
      Main         = require('Main'),
      Weather      = require('Weather'),
      About        = require('About'),
      Examples     = require('Examples'),
      styles       = require('app/css/main.css');

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
          <Route path="about" component={About}/>
          <Route path="examples" component={Examples}/>
          <IndexRoute component={Weather}/>
      </Route>
  </Router>,

  document.getElementById('app')
);




