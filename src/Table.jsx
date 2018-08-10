import React from 'react'
import Row from './Row'
import ColumnLabels from './ColumnLabels'
import './App.css'

const Table = props => (
  <div className="scrollmenu" style={{float: 'left', position: 'relative'}}>
    <ColumnLabels
      labels={props.labels}
      xPos={props.xPos}
      yPos={props.yPos}
    />
    {
      props.table.map((row, y) => (
        <Row
          key={y}
          row={row}
          y={y}
          onCellClick={props.onCellClick}
          xPos={props.xPos}
          yPos={props.yPos}
        />
      ))
    }
  </div>
)

export default Table
