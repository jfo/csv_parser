import React, { Component } from 'react'
import './style.css'
import './Cell.css'

const calculateCss = (key, xPos) => {

  let css = {
    textAlign : 'center',
    fontWeight : 'bold',
    backgroundColor : '#f0f0f0'
  }
  if (key === 0) {
    css.backgroundColor = '#000000'
  }

  if (xPos && xPos === key) {
    css.backgroundColor = '#dddddd'
  }
  return css
}

class ColumnLabels extends Component {
  constructor(props) {
    super(props)
  }

  showDropdownMenu = event => {
    event.preventDefault()
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu)
    })
  }

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu)
    })

  }
  render() {
    return (
      <div>
        {
          this.props.labels.map((label, key) => (
            <span
              className="Cell"
              key={label}
              style={calculateCss(key, this.props.xPos)}
            >
              {label}
            </span>
          ))
        }
      </div>
    )
  }
}

export default ColumnLabels
