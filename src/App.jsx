import React from 'react'
import Menu from './Menu'
import Table from './Table'
import PropTypes from 'prop-types'


const App = props => (
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

export default App
