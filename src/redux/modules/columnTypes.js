const getType = value => (
  isNaN(value) ? 'string' : 'number'
)

export default (state = new Map(), action) => {
  if (action.type === 'SET_COLUMN_TYPES') {
    if (action.table.length > 1) {
      const columnTypes = action.table[1].reduce((columnTypes, cell, index) => {
        if (index !== 0) {
          if (cell.value) {
            return columnTypes.set(index, getType(cell.value))
          }
        }
        return columnTypes
      }, new Map())
      return columnTypes
    }
  }
  return state
}
