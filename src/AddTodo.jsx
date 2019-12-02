import React from "react";

class AddTodo extends React.Component {
  state = {
    content: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };
  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group text-left">
          <label htmlFor="todo">Enter a todo:</label>
          <input
            type="text"
            id="todo"
            className="form-control"
            value={this.state.content}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}
export default AddTodo;
