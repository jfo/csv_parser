import { combineReducers } from 'redux'
import table from './modules/table'
import height from './modules/height'
import length from './modules/length'
import columnTypes from './modules/columnTypes'
import columnLabels from './modules/columnLabels'
import yPos from './modules/yPos'
import xPos from './modules/xPos'
export default combineReducers({
  table,
  height,
  length,
  columnTypes,
  columnLabels,
  yPos,
  xPos
})
