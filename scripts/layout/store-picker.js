import React from 'react'
import helpers from '../helpers'
import { History } from 'react-router'

const StorePicker = React.createClass({

  mixins: [History],

  goToStore (event) {
    const storeId = this.refs.storeId.value

    event.preventDefault()
    // Transition from <Storepicker> to <App> using input value (store name)
    this.history.pushState(null, '/store/' + storeId)

  },

  render () {
    return (
      <form className='store-selector' onSubmit={this.goToStore}>
        <h2>Please enter A Store</h2>
        <input type='text' ref='storeId' defaultValue={helpers.getFunName()} required />
        <input type='submit' />
      </form>
    )
  }
})

export default StorePicker
