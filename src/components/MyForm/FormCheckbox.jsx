import { Component } from "react";

export class FormCheckbox extends Component {
  state = {
    licence: false,
  };

  handleChange = (evt) => {
    console.log(evt.currentTarget.checked);
    this.setState({ licence: evt.currentTarget.checked });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          licence
          <input
            type="checkbox"
            name="licence"
            onChange={this.handleChange}
            checked={this.state.licence}
          />
        </label>
        <button type="submit" disabled={!this.state.licence}>
          Send
        </button>
      </form>
    );
  }
}
