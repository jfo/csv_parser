import React from 'react';
import {connect} from 'react-redux';
import './Cell.css';

const calculateCss = (active, x) => {
  let css = {};
  if (x === 0) {
    css = {
      textAlign: 'center',
      fontWeight: 'bold',
      backgroundColor: '#f0f0f0',
    };
  } else if (active) {
    css = {
      backgroundColor: '#dddddd',
    };
  }
  return css;
};

const Cell = props => (
  <span
    className="Cell"
    style={calculateCss(props.active, props.x)}
    onClick={() => props.onCellClick(props.x, props.y)}>
    {props.cell}
  </span>
);

export default connect(
  (state, ownProps) => ({
    active: state.xPos === ownProps.x && state.yPos === ownProps.y,
  }),
  dispatch => ({
    onCellClick: (xPos, yPos) => {
      dispatch({type: 'ON_CELL_CLICK', xPos, yPos});
    },
  }),
)(Cell);
