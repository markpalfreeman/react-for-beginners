const React = require('react')
import { LinkedStateMixin } from 'react-catalyst'
const Header = require('../components/header')
const Order = require('../components/order')
const Inventory = require('../components/inventory')
const MenuItem = require('../components/menu-item')

const Rebase = require('re-base')
const base = Rebase.createClass('https://react-order-menu.firebaseio.com')

var App = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState () {
    return {
      menu: {},
      order: {}
    }
  },

  componentDidMount () {
    // Sync data with proper "store" from Firebase
    base.syncState(`${this.props.params.storeId}/menu`, {
      context: this,
      state: 'menu'
    })

    const localStore = localStorage.getItem(`order-${this.props.params.storeId}`)

    if (localStore) {
      this.setState({
        order: JSON.parse(localStore)
      })
    }
  },

  componentWillUpdate (nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order))
  },

  addMenuItem (menuItem) {
    var timestamp = new Date().getTime()
    // update the state object
    this.state.menu['item-'+ timestamp] = menuItem
    // then set the state (only pass changed values for perf)
    this.setState({ menu: this.state.menu })
  },

  removeMenuItem (key) {
    if (confirm('Are you sure you want to remove this item?')) {
      this.state.menu[key] = null;
      this.setState({
        menu: this.state.menu
      })
    }
  },

  addItemToOrder (key) {
    // Add to existing count, or create it and set to 1
    this.state.order[key] = this.state.order[key] + 1 || 1
    this.setState({
      order: this.state.order
    })
  },

  removeItemFromOrder (key) {
    delete this.state.order[key]
    this.setState({
      order: this.state.order
    })
  },

  loadSamples () {
    this.setState({
      menu: require('../sample-items')
    })
  },

  render () {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className='list-of-fishes'>
            {Object.keys(this.state.menu).map((key) => (
              <MenuItem key={key} index={key} details={this.state.menu[key]} addToOrder={this.addItemToOrder}/>
            ))}
          </ul>
        </div>
        <Order menu={this.state.menu} order={this.state.order} removeItemFromOrder={this.removeItemFromOrder}/>
        <Inventory menu={this.state.menu} addMenuItem={this.addMenuItem} removeMenuItem={this.removeMenuItem} loadSamples={this.loadSamples} linkState={this.linkState}/>
      </div>
    )
  }
})

module.exports = App
