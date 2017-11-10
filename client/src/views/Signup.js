import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../api";

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      credentials: {
        gender: "Male"
      }
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
      .signup(this.state.credentials)
      .then(user => {
        this.props.history.push("/login");
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
        <h1>Signup</h1>

        <form onSubmit={this.onFormSubmit}>
          <input
            onChange={this.onInputChange}
            name={"email"}
            placeholder={"Email"}
            type={"email"}
          />
          <input
            onChange={this.onInputChange}
            name={"password"}
            placeholder={"Password"}
            type={"password"}
          />
          <input
            onChange={this.onInputChange}
            name={"name"}
            placeholder={"Name"}
            type={"text"}
          />
          <input
            onChange={this.onInputChange}
            name={"image"}
            placeholder={"Image URL"}
            type={"url"}
          />
          <select
            onChange={this.onInputChange}
            name={"gender"}
            value={this.state.credentials.gender}
            type={"text"}
          >
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
          </select>
          <input
            onChange={this.onInputChange}
            name={"age"}
            placeholder={"Age"}
            type={"number"}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Signup;
