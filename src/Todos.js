import React, { Component } from 'react';

class Todos extends Component {
  state = {
    todos: [{ text: 'clean basement', completed: false }]
  };
  render() {
    return (
      <div>
        <input placeholder="fill in text" />
        {this.state.todos.map((todo, index) => {
          return <div key={index}>{todo.text}</div>;
        })}
      </div>
    );
  }
}

export default Todos;
