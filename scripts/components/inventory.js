var React = require('react');
var AddMenuItemForm = require('./add-menu-item-form');

var Inventory = React.createClass({
  render: function () {
    return (
      <section>
        <h2>Inventory</h2>
        <AddMenuItemForm {...this.props}/>
      </section>
    )
  }
});

module.exports = Inventory;
