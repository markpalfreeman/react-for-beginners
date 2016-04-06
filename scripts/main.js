import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Navigation } from 'react-router'
import { createHistory } from 'history'

import App from './layout/app'
import StorePicker from './layout/store-picker'
import FourOhFour from './layout/four-oh-four'

const routes = (
  <Router history={createHistory()}>
    <Route path='/' component={StorePicker}/>
    <Route path='store/:storeId' component={App}/>
    <Route path='*' component={FourOhFour}/>
  </Router>
)

// Render App to DOM
ReactDOM.render(routes, document.getElementById('main'))
