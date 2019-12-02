import React from "react";

const Todo = ({ todos, deleteTodo }) => {
  const todoList = todos.length
    ? todos.map((todo, index) => {
        return (
          <div key={index}>
            <ul className="list-group">
              <li
                className="list-group-item text-left"
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                {todo.content}
              </li>
            </ul>
          </div>
        );
      })
    : "You have no todo left";

  return <div>{todoList}</div>;
};
export default Todo;
