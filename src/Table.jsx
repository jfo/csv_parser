import React, { PureComponent } from 'react'
import Row from './Row'
import ColumnLabels from './ColumnLabels'
import './App.css'

class Table extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props
    return (
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
            />
          ))
        }
      </div>
    )
  }
}

export default Table
