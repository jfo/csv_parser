export default (state = 100, action) => {
  if (action.type === 'SET_HEIGHT') {
    return action.table.length
  }
  return state
}
