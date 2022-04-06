import React, { useEffect, useState } from 'react'
import TodoItem from './components/TodoItem'
import { getTodos } from './API'

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = (): void => {
    getTodos()
        .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
        .catch((err: Error) => console.log(err))
  }
  return (
      <main className='App'>
        <h1>My Todos</h1>
        {todos.map((todo: ITodo) => (
            <TodoItem
                key={todo._id}
                todo={todo}
                updateTodo={() => {}}
                deleteTodo={() => {}}
            />
        ))}
      </main>
  )
}

export default App