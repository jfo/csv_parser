import React from 'react'
import { connect } from 'react-redux'
import './Cell.css'


const calculateCss = (x, y, xPos, yPos) => {
  console.log(`${xPos} ${yPos}`)
  let css = {}
  if (x === 0) {
    css = {
      textAlign : 'center',
      fontWeight : 'bold',
      backgroundColor : '#f0f0f0'
    }
    if (yPos && y == yPos) {
      css.backgroundColor = '#dddddd'
    }
  } else if (x === xPos && y === yPos) {
    css.backgroundColor = '#dddddd'
  }
  return css
}

const Cell = props => (
  <span
    className="Cell"
    style={calculateCss(props.x, props.y, props.xPos, props.yPos)}
    onClick={() => props.onCellClick(props.x, props.y)}
  >
    {props.cell}
  </span>
)

export default Cell
