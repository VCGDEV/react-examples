import React from "react";

const BoilingVerdict = props => {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  } else {
    return <p>The water would not boil.</p>;
  }
};

const scaleNames = {
  c: "Celcius",
  f: "Fahrenheit"
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <div>
        <label>Enter temperature in {scaleNames[scale]}:</label>
        <input value={temperature} onChange={this.handleChange} />
      </div>
    );
  }
}
const toCelcius = Fahrenheit => {
  return ((Fahrenheit - 32) * 5) / 9;
};

const toFahrenheit = celsius => {
  return (celsius * 9) / 5 + 32;
};

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (!Number.isNaN(input)) {
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  } else {
    return "";
  }
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  handleCelciusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature) {
    console.log(temperature);
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelcius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelciusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={celsius} />
      </div>
    );
  }
}

export default Calculator;
