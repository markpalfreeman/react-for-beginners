var React = require('react')
var helpers = require('../helpers')
var ReactRouter = require('react-router')
var History = ReactRouter.History

var StorePicker = React.createClass({

  mixins: [History],

  goToStore: function (event) {
    var storeId = this.refs.storeId.value

    event.preventDefault()
    // Transition from <Storepicker> to <App> using input value (store name)
    this.history.pushState(null, '/store/' + storeId)

  },

  render: function () {
    return (
      <form className='store-selector' onSubmit={this.goToStore}>
        <h2>Please enter A Store</h2>
        <input type='text' ref='storeId' defaultValue={helpers.getFunName()} required />
        <input type='submit' />
      </form>
    )
  }
})

module.exports = StorePicker
