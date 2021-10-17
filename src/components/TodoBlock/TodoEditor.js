import React, { Component } from "react";

class TodoEditor extends Component {
  state = {
    message: "",
  };

  handleChange = (evt) => {
    this.setState({ message: evt.currentTarget.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: "" });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <p>Add new note</p>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Save
        </button>
      </form>
    );
  }
}

export default TodoEditor;
