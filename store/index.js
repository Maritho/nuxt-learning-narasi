export const state = () => ({
  counter: 0,
  todoList: [
    "string"
  ]
})

export const mutations = {
  tambahCounter(state, data) {
    console.log('>>>>>>>>>>>>>>>>>>>>>', data)
    state.counter += data;
  },
  kurangiCounter(state, data) {
    state.counter -= data
  },
  deleteTodoList(state, index) {
    state.todoList.splice(index, 1)
  },
  tambahTodoList(state, text) {
    state.todoList.push(text)
  },
  ubahTodoList(state, item) {
    state.todoList[item.index] = item.text;
  }
}
