var React = require('react')

var AddMenuItemForm = React.createClass({
  propTypes: {
    addMenuItem: React.PropTypes.func.isRequired
  },

  createMenuItem: function (event) {
    // 1. Create fish object from form data
    var fish = {
      name: this.refs.name.value,
      price: this.refs.price.value,
      status: this.refs.status.value,
      description: this.refs.description.value,
      image: this.refs.image.value
    }

    event.preventDefault()

    // 2. Add the fish to the App state, clear the form
    this.props.addMenuItem(fish)
    this.refs.fishForm.reset()
  },

  render: function () {
    return (
      <form className='fish-edit' ref='fishForm' onSubmit={this.createMenuItem}>
        <input type='text' ref='name' placeholder='Fish name'/>
        <input type="text" ref='price' placeholder='Fish price'/>
        <select ref='status'>
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold out!</option>
        </select>
        <textarea type='text' ref='description' placeholder='Description'></textarea>
        <input type="text" ref='image' placeholder='URL to Image'/>
        <button type='submit'>+ Add Item</button>
      </form>
    )
  }
})

module.exports = AddMenuItemForm
