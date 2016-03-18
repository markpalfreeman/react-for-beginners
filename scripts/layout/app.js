var React = require('react');
var Header = require('../components/header');
var Order = require('../components/order');
var Inventory = require('../components/inventory');

var App = React.createClass({

  getInitialState: function () {
    return {
      menu: {},
      order: {}
    }
  },

  addMenuItem: function(menuItem) {
    var timestamp = new Date().getTime();
    // update the state object
    this.state.menu['item-'+ timestamp] = menuItem;
    // then set the state (only pass changed values for perf)
    this.setState({ menu: this.state.menu });
  },

  render: function () {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order/>
        <Inventory addMenuItem={this.addMenuItem}/>
      </div>
    )
  }
});

module.exports = App;
