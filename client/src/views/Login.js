import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../api";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      credentials: {}
    };
  }

  onInputChange = changeEvent => {
    changeEvent.persist();

    this.setState(state => {
      return {
        credentials: {
          ...state.credentials,
          [changeEvent.target.name]: changeEvent.target.value
        }
      };
    });
  };

  onFormSubmit = submitEvent => {
    submitEvent.preventDefault();

    api.users
      .login(this.state.credentials)
      .then(user => {
        if (user.error) {
          return;
        }

        localStorage.setItem("token", user.token);

        this.props.history.push("/profile");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div
        style={{
          background:
            "url('https://assets.awwwards.com/awards/images/2015/07/awwwards_scrolling-banner.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          textAlign: "center",
          color: "white",
          justifyContent: "center"
        }}
      >
        <Link to={"/"}>Back</Link>
        <h1>Login</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            onChange={this.onInputChange}
            name={"email"}
            placeholder={"Email"}
            type="email"
          />
          <input
            onChange={this.onInputChange}
            name={"password"}
            placeholder={"Password"}
            type="password"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
