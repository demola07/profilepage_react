import React, { Component } from "react";
import styles from "./main.module.css";
import demola from "../images/demola.jpg";

const Axios = require("axios");

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: {
        name: "",
        email: "",
        message: ""
      },
      status: {
        success: false,
        fail: false
      },
      responseMessage: ""
    };
    this.baseState = this.state;
    // this.baseState1 = this.state.msg;
  }

  handleChange = event => {
    let msgs = this.state.msg;
    msgs[event.target.id] = event.target.value;

    this.setState({
      msg: msgs
    });
    console.log(this.state);
    console.log(this.state.msg);
  };

  handleSubmit = event => {
    event.preventDefault();
    Axios.post("http://localhost:6060/api/form/", this.state.msg)
      .then(res => {
        const data = res.data;
        if (data.status) {
          // this.setState({
          //   msg: {
          //     name: "",
          //     email: "",
          //     message: ""
          //   }
          // });
          this.setState({
            status: {
              success: true
            }
          });
          // setTimeout(() => {}, 2000);
        } else if (!data.status) {
          this.setState({
            responseMessage: data.error,
            status: {
              fail: true
            }
          });
        } else {
          alert(`Error`);
        }
        setTimeout(() => {
          this.setState({
            msg: {
              name: "",
              email: "",
              message: ""
            },
            status: {
              success: false,
              fail: false
            }
          });
        }, 2000);
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
                <section class={styles.sec}>
                  <ul>
                    <li>
                      <i class="fas fa-envelope" />
                      <span>
                        <p>demolasobaki@gmail.com</p>
                      </span>
                    </li>
                    <li>
                      <i class="fas fa-mobile-alt" />
                      <span>
                        <p>08069459084</p>
                      </span>
                    </li>
                    <li>
                      <i class="fas fa-address-card" />
                      <span>
                        <p>Lagos, Nigeria</p>
                      </span>
                    </li>
                    <li id={styles.resume}>
                      <i class="fas fa-file" id={styles.resume} />
                      <span>
                        <a href="#">Resume</a>
                      </span>
                    </li>
                  </ul>
                </section>
              </div>
            </div>

            <div class="col-sm-7 bg-info" id={styles.right}>
              <div id={styles.upper}>
                <p>HELLO EVERYBODY, I AM</p>
                <h3>ADEMOLA SOBAKI</h3>
                <p>JUNIOR FULLSTACK WEB DEVELOPER</p>
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
                  <a href="https://github.com/demola07" target="_blank">
                    <i class="fab fa-github-square" id={styles.icons} />
                  </a>
                  <a href="https://twitter.com/home?lang=en" target="_blank">
                    <i class="fab fa-twitter-square" id={styles.icons} />
                  </a>
                  <a href="https://web.facebook.com/cooldemola" target="_blank">
                    <i class="fab fa-facebook-square" id={styles.icons} />
                  </a>
                  <a href="https://www.linkedin.com/hp/" target="_blank">
                    <i class="fab fa-linkedin" id={styles.icons} />
                  </a>
                </div>
              </div>
              <section class={styles.form}>
                <p>Contact me here: </p>
                <form onSubmit={this.handleSubmit}>
                  <label for="name">Name:</label>
                  <input
                    type="name"
                    value={this.state.msg.name}
                    class="form-control"
                    id="name"
                    onChange={this.handleChange}
                  />
                  <label for="email">Email address:</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    value={this.state.msg.email}
                    onChange={this.handleChange}
                  />
                  <label for="message">Message:</label>
                  <textarea
                    class="form-control"
                    value={this.state.msg.message}
                    id="message"
                    onChange={this.handleChange}
                  />
                  <button type="submit" class="btn btn-primary btn-block">
                    Submit
                  </button>
                  {this.state.status.success && (
                    <div class="alert alert-success">
                      Successfully Submitted!!!
                    </div>
                  )}
                  {this.state.status.fail && (
                    <div class="alert alert-danger">
                      Invalid Entry: {this.state.responseMessage}
                    </div>
                  )}
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
