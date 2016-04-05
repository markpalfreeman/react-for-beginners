var React = require('react')
var helpers = require('../helpers')

var MenuItem = React.createClass({

  render: function () {
    const { details } = this.props

    return (
      <li className='menu-fish'>
        <img src={details.image} alt={details.name}/>
        <h3 className='fish-name'>
          {details.name} <span className='price'>{helpers.formatPrice(details.price)}</span>
        </h3>
        <p>{details.description}</p>
      </li>
    )
  }
})

module.exports = MenuItem
