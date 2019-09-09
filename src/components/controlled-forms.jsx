import React from "react";
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.value}`);
    event.preventDefault();
    this.setState({ value: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Enter your name</label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
