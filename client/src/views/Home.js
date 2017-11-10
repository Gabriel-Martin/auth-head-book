import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
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
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <Link to={"/login"}>Login</Link>
        </div>
        <br />
        <div>
          <Link to={"/signup"}>Signup</Link>
        </div>
      </div>
    );
  }
}

export default Home;
