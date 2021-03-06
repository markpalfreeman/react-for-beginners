import React from 'react'

const Header = React.createClass({
  propTypes: {
    tagline: React.PropTypes.string.isRequired
  },

  render () {
    return (
      <header className="top">
        <h1>Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day</h1>
        <h3><span>{this.props.tagline}</span></h3>
      </header>
    )
  }
})

export default Header
