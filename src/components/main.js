import React, { Component } from "react";
import styles from "./main.module.css";
import demola from "../images/demola.jpg";
import github from "../images/github.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
const Axios = require("axios");

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.baseState = this.state;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    Axios.post("https://profilepagebackend.herokuapp.com/api/form", this.state)
      .then(res => {
        if (res.status) {
          alert(`Message Sent`);
        } else {
          alert(`Error`);
        }
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div>
        <div class="container">
          <div class="row h-95" id={styles.main}>
            <div class="col-sm-5 bg-light" id={styles.left}>
              <div>
                <img id={styles.img} src={demola} alt="demola" />
              </div>
            </div>

            <div class="col-sm-7 bg-info" id={styles.right}>
              <div id={styles.upper}>
                <p>HELLO EVERYBODY, I AM</p>
                <h3>ADEMOLA SOBAKI</h3>
                <p>FULLSTACK WEB DEVELOPER</p>
              </div>
              <div id={styles.middle}>
                <p>PROJECTS</p>
                <ul>
                  <li>
                    <a href="#">Blog App</a>
                  </li>
                  <li>
                    <a href="#">Meetups App</a>
                  </li>
                  <li>
                    <a href="#">React Clock</a>
                  </li>
                  <li />
                </ul>

                <div>
                  <a href="#">
                    <img id={styles.icons} src={github} alt="github" />
                  </a>
                  <a href="#">
                    <img id={styles.icons} src={twitter} alt="twitter" />
                  </a>
                  <a href="#">
                    <img id={styles.icons} src={facebook} alt="facebook" />
                  </a>
                  <a href="#">
                    <img id={styles.icons} src={linkedin} alt="linkedin" />
                  </a>
                </div>
              </div>
              <section class={styles.form}>
                <p>Contact me here: </p>
                <form onSubmit={this.handleSubmit}>
                  <label for="name">Name:</label>
                  <input
                    type="name"
                    class="form-control"
                    id="name"
                    onChange={this.handleChange}
                  />
                  <label for="email">Email address:</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    onChange={this.handleChange}
                  />
                  <label for="message">Message:</label>
                  <textarea
                    class="form-control"
                    id="message"
                    onChange={this.handleChange}
                  />
                  <button type="submit" class="btn btn-primary btn-block">
                    Submit
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
