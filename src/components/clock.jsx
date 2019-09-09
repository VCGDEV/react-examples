import React from "react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), isClockOn: false };
    this.toggleTimer = this.toggleTimer.bind(this);
  }

  componentDidMount() {
    this.startClock();
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  clearInterval() {
    if (this.timerID) {
      clearInterval(this.timerID);
      this.setState(state => ({
        isClockOn: !state.isClockOn
      }));
    }
  }

  startClock() {
    this.timerID = setInterval(() => this.setState({ date: new Date() }), 1000);
    this.setState(state => ({
      isClockOn: !state.isClockOn
    }));
  }
  toggleTimer() {
    if (this.state.isClockOn) {
      this.clearInterval();
    } else {
      this.startClock();
    }
  }

  render() {
    const isClockOn = this.state.isClockOn;
    return (
      <div>
        <fieldset>
          <legend>Clock example</legend>
          <FormattedDate date={this.state.date} />
          <button onClick={this.toggleTimer}>
            {isClockOn ? "Stop" : "Start"}
          </button>
        </fieldset>
      </div>
    );
  }
}

const FormattedDate = props => (
  <h2>It is: {props.date.toLocaleTimeString()}</h2>
);

export default Clock;
