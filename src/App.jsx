import React, { PureComponent } from 'react'
import Menu from './Menu'
import Table from './Table'

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
        />
      </div>
    )
  }
}

export default App
