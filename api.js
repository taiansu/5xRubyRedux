import { v4 } from 'node-uuid'

const BASE_URL = 'http://localhost:3000'

export const fetchTodos = () => {
  return fetch(`${BASE_URL}/todos`).
         then(resp => resp.json())
}

export const addTodo = (text) => {
  return fetch(`${BASE_URL}/todos`,
                {
                  method: 'POST',
                  headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
                  body: addTodoJSON(text)
                }).
         then(resp => resp.json())
}

const addTodoJSON = (text) => {
  return JSON.stringify({ id: v4(), description: text, done: false })
}

export const toggleTodo = (id) =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    return todo;
  });
