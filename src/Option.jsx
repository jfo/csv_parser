import React, { Component } from 'react'

class Option extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <label
        className="active"
        htmlFor="getFile"
        onClick={this.props.hideDropdownMenu}
      >
        <input
          type="file"
          onClick={ event => event.target.value = null }
          onChange={this.props.optionFunction}
          id="getFile"
          accept=".csv"
        />
        {this.props.option}
      </label>
    )
  }
}

export default Option
