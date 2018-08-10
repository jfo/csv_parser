import parser from 'csv-parse/lib/sync'

const getValue = (x, y, value) => {
  if (x === 0) {
    return y
  }
  return value
}

const createTable = () => {
  return Array(1000)
    .fill(null)
    .map((value, y) => (
      Array(13)
        .fill(null)
        .map((value, x) => (
          getValue(x, y, null)
        ))
    ))
}

const convertValue = (value, row) => (
  row === 0 || isNaN(value) ? value : +value
)

export default (state = createTable(), action) => {
  if (action.type === 'OPEN_CSV') {
    const table = parser(action.csvData)
    if (table.length > 0) {
      const actualColLength = table.length
      const colLength = actualColLength < 100 ? 100 : actualColLength + 1
      const actualRowLength = table[0].length
      const rowLength = actualRowLength < 27 ? 27 : actualRowLength + 1
      return Array(colLength).fill(null).map((row, y) => (
        Array(rowLength).fill(null).map((cell, x) => (
          getValue(
            y >= actualColLength || x > actualRowLength ?
              null :
              convertValue(table[y][x], y)
          )
        ))
      ))
    }
  }
  return state
}
