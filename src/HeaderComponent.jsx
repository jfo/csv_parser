import React, { Component } from 'react'
import Header from './Header'
import Option from './Option'

class HeaderComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayMenu: false,
      eventIsHappening: false
    }
  }

  showDropdownMenu = event => {
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu)
    })
  }

  hideDropdownMenu = event => {
    console.log('Yo')
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu)
    })
  }

  updateEventStatus = event  => {
    console.log('Hi')
    console.log(this.state.displayMenu)
    this.setState({
      displayMenu : false,
    })
    console.log('Hmm')
  }

  render() {
    return (
      <div
        className="dropdown"
        style={{
          textAlign: 'center',
          height: '40px',
          width:'100px',
          float: 'left',
          position: 'relative',
          zIndex: 10,
          paddingLeft: 30
        }}
        onClick={this.showDropdownMenu}
      >
        <Header
          type={this.props.type}
          showDropdownMenu={this.showDropdownMenu}
          hideDropdownMenu={this.hideDropdownMenu}
        />
        {
          <ul style={{
            display: this.state.displayMenu ?
              'inline' : 'none'
          }}>
            {this.props.options.map((option, key) => (
              <li
                key={option}
              >
                <Option
                  option={option}
                  hideDropdownMenu={this.hideDropdownMenu}
                  optionFunction={this.props.optionFunctions[key]}
                />
              </li>
            ))}
          </ul>
        }
      </div>
    )
  }
}

export default HeaderComponent
