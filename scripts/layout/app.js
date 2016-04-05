var React = require('react')
var Header = require('../components/header')
var Order = require('../components/order')
var Inventory = require('../components/inventory')
var MenuItem = require('../components/menu-item')

var App = React.createClass({

  getInitialState: function () {
    return {
      menu: {},
      order: {}
    }
  },

  addMenuItem: function (menuItem) {
    var timestamp = new Date().getTime()
    // update the state object
    this.state.menu['item-'+ timestamp] = menuItem
    // then set the state (only pass changed values for perf)
    this.setState({ menu: this.state.menu })
  },

  loadSamples: function () {
    this.setState({
      menu: require('../sample-items')
    })
  },

  render: function () {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className='list-of-fishes'>
            {Object.keys(this.state.menu).map((key) => (
              <MenuItem key={key} index={key} details={this.state.menu[key]}/>
            ))}
          </ul>
        </div>
        <Order/>
        <Inventory addMenuItem={this.addMenuItem} loadSamples={this.loadSamples}/>
      </div>
    )
  }
})

module.exports = App
