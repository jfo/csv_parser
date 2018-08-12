import { connect } from 'react-redux'

import App from './App'

export default connect(
  state => ({
    table: state.table,
    columnTypes: state.columnTypes,
    columnLabels: state.columnLabels,
  }),
  dispatch => ({
    openCSV: csvData =>
      dispatch((dispatch, getState) => {
        let state = getState()
        dispatch({ type: 'OPEN_CSV', csvData })
        state = getState()
        dispatch({ type: 'SET_COLUMN_TYPES', table: state.table })
        state = getState()
        dispatch({ type: 'SET_LABELS', length: state.length })
      }),
  }),
)(App)
