import React from "react";

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isGoing: true, numberOfGuests: 2 };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(this.state[name]);
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Number of guests:
          <input
            type="number"
            name="numberOfGuests"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Reservation;
