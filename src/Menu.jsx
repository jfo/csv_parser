import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  getCSVFile = event => {
    const selectedFile = document.getElementById('getFile')
      .files[0]

    const reader = new FileReader()

    reader.onload = e => {
      this.props.openCSV(e.target.result)
    }
    reader.readAsBinaryString(selectedFile)
  }

  render() {
    return (
      <div>
        <HeaderComponent
          type="File"
          options={['Open CSV File']}
          optionFunctions={[this.getCSVFile]}
        />
        <HeaderComponent
          type="Sort"
          options={['Increasing', 'Decreasing', 'Both']}
          optionFunctions={[null, null, null]}
        />
        <HeaderComponent
          type="Filter"
          options={['Less Than 100']}
          optionFunctions={[null]}

        />
      </div>
    )
  }
}

export default Menu
