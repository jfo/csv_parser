export default (state = 11, action) => {
  if (action.type === 'SET_LENGTH') {
    return action.table[0].length
  }
  return state
}
