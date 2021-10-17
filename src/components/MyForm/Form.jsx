import { Component } from "react";

export class Form extends Component {
  state = {
    name: " ",
    surname: "",
  };

  handleChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", surname: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Surname
          <input
            type="text"
            name="surname"
            value={this.state.surname}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Send</button>
      </form>
    );
  }
}
