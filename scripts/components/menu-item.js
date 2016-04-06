const React = require('react')
const helpers = require('../helpers')

const { object, func } = React.PropTypes

const MenuItem = React.createClass({
  propTypes: {
    details: object.isRequired,
    addToOrder: func.isRequired
  },

  addItemToOrder () {
    this.props.addToOrder(this.props.index)
  },

  render () {
    const { details } = this.props
    const isAvailable = (details.status === 'available' ? true : false)
    let buttonText = (isAvailable ? 'Add to Order' : 'Sold Out!')

    return (
      <li className='menu-fish'>
        <img src={details.image} alt={details.name}/>
        <h3 className='fish-name'>
          {details.name} <span className='price'>{helpers.formatPrice(details.price)}</span>
        </h3>
        <p>{details.description}</p>
        <button disabled={!isAvailable} onClick={this.addItemToOrder}>{buttonText}</button>
      </li>
    )
  }
})

module.exports = MenuItem
