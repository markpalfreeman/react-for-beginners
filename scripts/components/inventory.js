const React = require('react')
const AddMenuItemForm = require('./add-menu-item-form')
import EditMenuItem from './edit-menu-item'

const Inventory = React.createClass({
  render: function () {
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
          </div>
        ))}
        <AddMenuItemForm {...this.props}/>
        <button onClick={this.props.loadSamples}>Load Sample Menu</button>
      </section>
    )
  }
})

module.exports = Inventory
