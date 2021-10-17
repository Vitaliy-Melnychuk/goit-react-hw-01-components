import { Component } from "react";
import { CheckboxMore } from "./CheckboxMore";

export class MyApp extends Component {
  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <CheckboxMore onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}
