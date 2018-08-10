const defineLetter = number => {
  return String.fromCharCode('A'.charCodeAt(0) + number - 1)
}

const numberToLetters = num => {
  if (num <= 26) {
    return defineLetter(num)
  }
  const remainder = num % 26
  const quotient = Math.floor(num / 26)
  if (remainder === 0) {
    return defineLetter(quotient - 1) + defineLetter(26)
  }
  return defineLetter(quotient) + defineLetter(remainder)
}

const createLabels = size => {
  if (size < 12) {
    size = 12
  }
  return Array(size + 1).fill(null).map((value, key) => (
    key === 0 ? null : numberToLetters(key)
  ))
}


export default (state = createLabels(0), action) => {
  if (action.type === 'SET_LABELS') {
    if (action.length > 26) {
      return createLabels(action.length)
    }
  }
  return state
}
