import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../api";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      messages: [],
      post: {
        message: ""
      }
    };
  }

  getPosts = () => {
    api.posts.get().then(messages => {
      this.setState(state => {
        return {
          ...state,
          messages: messages
        };
      });
    });
  };

  componentDidMount() {
    api.users.getCurrentUser().then(user => {
      this.setState(state => {
        return {
          user: user
        };
      });
    });

    this.getPosts();
  }

  onInputChange = changeEvent => {
    changeEvent.persist();

    this.setState(state => {
      return {
        post: {
          ...state.post,
          [changeEvent.target.name]: changeEvent.target.value,
          name: this.state.user.name,
          image: this.state.user.image
        }
      };
    });
  };

  onFormSubmit = submitEvent => {
    submitEvent.preventDefault();

    api.posts.create(this.state.post).then(data => {
      this.getPosts();
    });
  };

  logout = () => {
    localStorage.removeItem("token");

    this.props.history.push("/login");
  };

  editProfile = () => {
    this.props.history.push("/profile/edit");
  };

  render() {
    let { user, messages } = this.state;
    return (
      <div
        style={{
          background:
            "url('http://wallpaper.pickywallpapers.com/1920x1080/subtle-floristic-pattern.jpg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "black",

          minHeight: "100vh",
          textAlign: "center",
          color: "white"
        }}
      >
        <button style={{ backgroundColor: "red" }} onClick={this.logout}>
          LOGOUT
        </button>

        <button onClick={this.editProfile}>EDIT PROFILE</button>

        <h1>{user.name}</h1>
        <img width={300} height={"auto"} src={user.image} alt="Profile Pic" />
        <h2>
          {user.gender} {user.age}
        </h2>
        <form onSubmit={this.onFormSubmit}>
          <textarea
            placeholder={"What's on your mind?"}
            onChange={this.onInputChange}
            value={this.state.message}
            name={"message"}
            cols={"100"}
            rows={"5"}
          />
          <br />
          <input
            style={{
              width: 725,
              backgroundColor: "darkgrey",
              color: "white",
              borderRadius: "10px"
            }}
            type={"submit"}
          />
        </form>
        <hr />
        <div>
          {messages.map(m => (
            <div key={m.id} style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img width="60" src={m.image} alt="pic" />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: 15
                }}
              >
                {m.name}~ {m.message}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Profile;
