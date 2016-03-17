var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var StorePicker = require('./layout/store-picker');
var App = require('./layout/app');
var fourOhFour = require('./components/four-oh-four');
var createBrowserHistory = require('history/lib/createBrowserHistory');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path='/' component={StorePicker}/>
    <Route path='store/:storeId' component={App}/>
    <Route path='*' component={fourOhFour}/>
  </Router>
)

// Render App to DOM
ReactDOM.render(routes, document.getElementById('main'));
