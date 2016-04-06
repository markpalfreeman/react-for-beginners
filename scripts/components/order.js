var React = require('react')
var helpers = require('../helpers')

var Order = React.createClass({
  renderOrder (key) {
    const item = this.props.menu[key]
    const count = this.props.order[key]
    const removeButton = <button onClick={this.props.removeItemFromOrder.bind(null, key)}>&times;</button>

    if (!item) {
      return <li key={key}>Sorry, item no longer available! {removeButton}</li>
    } else {
      const itemTotal = count * parseInt(item.price)
      return <li key={key}>{count}lbs {item.name} <span>{helpers.formatPrice(itemTotal)}</span>{removeButton}</li>
    }
  },

  render () {
    const orderIds = Object.keys(this.props.order)

    let total = orderIds.reduce((prevTotal, key) => {
      const item = this.props.menu[key]
      const count = this.props.order[key]
      let isAvailable = item && item.status === 'available'

      if (item && isAvailable) {
        return prevTotal + (count * parseInt(item.price) || 0)
      }

      return prevTotal
    }, 0)

    return (
      <div className='order-wrap'>
        <h2 className='order-title'></h2>
        <ul className='order'>
          {orderIds.map(this.renderOrder)}
          <li className='total'><strong>Total:</strong>{helpers.formatPrice(total)}</li>
        </ul>
      </div>
    )
  }
})

module.exports = Order
