const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')
const StorePicker = require('./layout/store-picker')
const App = require('./layout/app')
const fourOhFour = require('./components/four-oh-four')
const createBrowserHistory = require('history/lib/createBrowserHistory')

const Router = ReactRouter.Router
const Route = ReactRouter.Route
const Navigation = ReactRouter.Navigation

const routes = (
  <Router history={createBrowserHistory()}>
    <Route path='/' component={StorePicker}/>
    <Route path='store/:storeId' component={App}/>
    <Route path='*' component={fourOhFour}/>
  </Router>
)

// Render App to DOM
ReactDOM.render(routes, document.getElementById('main'))
