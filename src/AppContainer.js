import { connect } from 'react-redux'

import App from './App'

export default connect(
  state => ({
    table: state.table,
    height: state.height,
    length: state.length,
    columnTypes: state.columnTypes,
    columnLabels: state.columnLabels,
    xPos: state.xPos,
    yPos: state.yPos
  }),
  dispatch => ({
    openCSV: csvData =>
      dispatch((dispatch, getState) => {
        let state = getState()
        dispatch({ type: 'OPEN_CSV', csvData })
        state = getState()
        dispatch({ type: 'SET_HEIGHT', table: state.table })
        dispatch({ type: 'SET_LENGTH', table: state.table })
        dispatch({ type: 'SET_COLUMN_TYPES', table: state.table })
        state = getState()
        dispatch({ type: 'SET_LABELS', length: state.length })
      }),
    onCellClick: (xPos, yPos) =>
      dispatch({ type: 'ON_CELL_CLICK', xPos, yPos })
  }),
)(App)
