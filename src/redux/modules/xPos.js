export default (state = null, action) => {
  if (action.type === 'ON_CELL_CLICK') {
    return action.xPos
  }
  return state
}
