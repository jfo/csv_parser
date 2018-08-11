import { observable } from 'mobx'

const tableState = new class Table {
  @observable table = []
  
}

tableState.increment = () => {
  return 0
}

tableState.decrement = () => {
  return 0
}
