import React from "react"

type Props = TodoProps & {
    updateTodo: (todo: ITodo) => void
    deleteTodo: (_id: string) => void
}

const Todo: React.FC<Props> = ({ todo }) => {
    const checkTodo: string = todo.status ? `line-through` : ""
    return (
        <div className="Card">
        <div className="Card--text">
        <h1 className={checkTodo}>{todo.name}</h1>
            <span className={checkTodo}>{todo.description}</span>
        </div>
        <div className="Card--button">
    <button
        onClick={() => console.log('update clicked')}
    className={todo.status ? `hide-button` : "Card--button__done"}
        >
        Complete
        </button>
        <button
    onClick={() => console.log('delete clicked')}
    className="Card--button__delete"
        >
        Delete
        </button>
        </div>
        </div>
)
}

export default Todo