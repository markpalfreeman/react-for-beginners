var React = require('react');

var StorePicker = React.createClass({

  render: function () {
    return (
      <form className="store-selector">
        <h2>Please enter A Store</h2>
        <input type="text" ref="storeId" required />
        <input type="submit" />
      </form>
    )
  }
});

module.exports = StorePicker;
