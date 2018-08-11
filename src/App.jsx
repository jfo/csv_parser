import React, { PureComponent } from 'react'
import Menu from './Menu'
import Table from './Table'

PureComponent.componentDidUpdate = prevProps => {
  const name =
        this.constructor.displayName || this.constructor.name || 'Component'
  console.group(name)
  Object.keys(prevProps).forEach(key => {
    if (prevProps[key] !== this.props[key]) {
      console.log(
        `property ${key} changed from ${prevProps[key]} to ${
          this.props[key]
        }`
      )
    }
  })
  console.groupEnd(name)
}

class App extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props
    return (
      <div style={{float: 'left'}}>
        <Menu
          openCSV={props.openCSV}
        />
        <Table
          labels={props.columnLabels}
          table={props.table}
          onCellClick={props.onCellClick}
          xPos={props.xPos}
          yPos={props.yPos}
        />
      </div>
    )
  }
}

export default App
