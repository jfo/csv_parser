import { combineReducers } from 'redux'
import table from './modules/table'
import columnTypes from './modules/columnTypes'
import columnLabels from './modules/columnLabels'
import yPos from './modules/yPos'
import xPos from './modules/xPos'
export default combineReducers({
  table,
  columnTypes,
  columnLabels,
  yPos,
  xPos
})
