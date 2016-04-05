var React = require('react')
var Header = require('../components/header')
var Order = require('../components/order')
var Inventory = require('../components/inventory')
var MenuItem = require('../components/menu-item')

var App = React.createClass({

  getInitialState () {
    return {
      menu: {},
      order: {}
    }
  },

  addMenuItem (menuItem) {
    var timestamp = new Date().getTime()
    // update the state object
    this.state.menu['item-'+ timestamp] = menuItem
    // then set the state (only pass changed values for perf)
    this.setState({ menu: this.state.menu })
  },

  addItemToOrder (key) {
    // Add to existing count, or create it and set to 1
    this.state.order[key] = this.state.order[key] + 1 || 1
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
        <Order menu={this.state.menu} order={this.state.order}/>
        <Inventory addMenuItem={this.addMenuItem} loadSamples={this.loadSamples}/>
      </div>
    )
  }
})

module.exports = App
