var React = require('react');
var Header = require('../components/header');
var Order = require('../components/order');
var Inventory = require('../components/inventory');

var App = React.createClass({

  render: function () {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header/>
        </div>
        <Order/>
        <Inventory/>
      </div>
    )
  }
});

module.exports = App;
