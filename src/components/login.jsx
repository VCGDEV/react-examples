import React from "react";

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLogedIn: false };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({ isLogedIn: true });
  }

  handleLogout() {
    this.setState({ isLogedIn: false });
  }

  render() {
    const isLogedIn = this.state.isLogedIn;
    let button;
    if (isLogedIn) {
      button = <LogoutButton onClick={this.handleLogout} />;
    } else {
      button = <LoginButton onClick={this.handleLogin} />;
    }
    return (
      <div>
        <legend>Conditional rendering example</legend>
        <Greeting isLoggedIn={isLogedIn} />
        {button}
      </div>
    );
  }
}

const LoginButton = props => <button onClick={props.onClick}>Login</button>;

const LogoutButton = props => <button onClick={props.onClick}>Logout</button>;

const Greeting = props => {
  if (props.isLoggedIn) {
    return <h1>Welcome user</h1>;
  } else {
    return <h1>Welcome guest</h1>;
  }
};

export default LoginControl;
