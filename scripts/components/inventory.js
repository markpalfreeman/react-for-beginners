import React from 'react'
import AddMenuItemForm from './add-menu-item-form'

const { object, func } = React.PropTypes

const Inventory = React.createClass({
  propTypes: {
    menu: object.isRequired,
    addMenuItem: func.isRequired,
    removeMenuItem: func.isRequired,
    loadSamples: func,
    linkState: func.isRequired
  },

  render () {
    const { linkState } = this.props

    return (
      <section>
        <h2>Inventory</h2>
        {Object.keys(this.props.menu).map((key) => (
          <div className='fish-edit' key={key}>
            <input type='text' valueLink={linkState(`menu.${key}.name`)} placeholder='Fish name'/>
            <input type="text" valueLink={linkState(`menu.${key}.price`)} placeholder='Fish price'/>
            <select valueLink={linkState(`menu.${key}.status`)}>
              <option value='available'>Fresh!</option>
              <option value='unavailable'>Sold out!</option>
            </select>
            <textarea type='text' valueLink={linkState(`menu.${key}.description`)} placeholder='Description'></textarea>
            <input type="text" valueLink={linkState(`menu.${key}.image`)} placeholder='URL to Image'/>
            <button onClick={this.props.removeMenuItem.bind(null, key)}>Remove Item</button>
          </div>
        ))}
        <AddMenuItemForm {...this.props}/>
        <button onClick={this.props.loadSamples}>Load Sample Menu</button>
      </section>
    )
  }
})

export default Inventory
