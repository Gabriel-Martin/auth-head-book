import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../api";

class EditProfile extends Component {
  constructor() {
    super();

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    api.users.getCurrentUser().then(user => {
      this.setState(state => {
        return {
          user: user
        };
      });
    });
  }

  onInputChange = changeEvent => {
    changeEvent.persist();

    this.setState(state => {
      return {
        user: {
          ...state.user,
          [changeEvent.target.name]: changeEvent.target.value
        }
      };
    });
  };

  onFormSubmit = submitEvent => {
    submitEvent.preventDefault();

    let { user } = this.state;

    api.users.update(user.id, user).then(user => {
      this.props.history.push("/profile");
    });
  };

  render() {
    let { user } = this.state;
    return (
      <div>
        <h1>Edit Profile</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            onChange={this.onInputChange}
            name={"name"}
            placeholder={"Name"}
            value={user.name}
            type={"text"}
          />
          <input
            onChange={this.onInputChange}
            value={user.image}
            name={"image"}
            placeholder={"Image URL"}
            type={"url"}
          />
          <select
            onChange={this.onInputChange}
            value={user.gender}
            name={"gender"}
            placeholder={"Gender"}
            type={"text"}
          >
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
          </select>
          <input
            onChange={this.onInputChange}
            value={user.age}
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

export default EditProfile;
