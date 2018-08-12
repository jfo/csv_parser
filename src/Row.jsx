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
        />
      ))
    }
  </div>
)

export default Row
