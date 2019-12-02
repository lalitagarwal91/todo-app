import React from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: "Buy Milk" },
      { id: 2, content: "Shopping" },
      { id: 3, content: "Market" }
    ]
  };

  addTodo = todo => {
    todo.id = this.state.todos.length + 1;
    const todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: todos
    });
  };
  render() {
    return (
      <div className="container text-center">
        <h1>Todos</h1>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
