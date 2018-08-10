import React from 'react'
import Cell from './Cell'

const Row = props => (
  <div>
    {
      props.row.map((cell, x) => (
        <Cell
          cell={cell}
          key={`${props.y}-${x}`}
          y={props.y}
          x={x}
          onCellClick={props.onCellClick}
          xPos={props.xPos}
          yPos={props.yPos}
        />
      ))
    }
  </div>
)

export default Row
