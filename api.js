import v4 from 'uuid/v4'

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

export const toggleTodo = (id) => {
  // 一般來說 server side 不會這樣，不過可以當做連續 ajax 的參考
  // 先用 Ajax query 一次
  return fetch(`${BASE_URL}/todos/${id}`).    // 取出 response 的 json
         then(resp => resp.json()).           // 上一步的結果就是 previousTodo
         then(previousTodo => {
           let nextTodo = Object.assign({},   // 生成要發送的 request body
                                        previousTodo,
                                        {done: !previousTodo.done});

           return fetch(`${BASE_URL}/todos/${id}`, {        // 再送一次 Ajax ，記得要 return 整個 promise
             method: 'PUT',
             headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
             body: JSON.stringify(nextTodo)
           })
         }).
         then(resp => resp.json())            // 再取出 response 的 json
  }
