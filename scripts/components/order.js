const React = require('react')
const CSSTransitionGroup = require('react-addons-css-transition-group')
const helpers = require('../helpers')

const Order = React.createClass({
  renderOrder (key) {
    const item = this.props.menu[key]
    const count = this.props.order[key]
    const removeButton = <button onClick={this.props.removeItemFromOrder.bind(null, key)}>&times;</button>

    if (!item) {
      return <li key={key}>Sorry, item no longer available! {removeButton}</li>
    } else {
      const itemTotal = count * parseInt(item.price)
      return (
        <li key={key}>
          <span>
            <CSSTransitionGroup
              className='count'
              component='span'
              transitionName='count'
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              <span key={count}>{count}</span>
            </CSSTransitionGroup>
            lbs {item.name} {removeButton}
          </span>
          <span className='price'>{helpers.formatPrice(itemTotal)}</span>
        </li>
      )
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

        <CSSTransitionGroup
          className='order'
          component='ul'
          transitionName='order'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {orderIds.map(this.renderOrder)}
          <li className='total'><strong>Total:</strong>{helpers.formatPrice(total)}</li>
        </CSSTransitionGroup>

      </div>
    )
  }
})

module.exports = Order
