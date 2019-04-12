import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ActionCable from "action-cable-react-jwt";

class App extends Component {
  // componentDidMount() {
  //   this.createSocket();
  // }
  //
  // createSocket = () => {
  //   // get your JWT token
  //   // this is an example using localStorage
  //   const yourToken = "1";
  //   let App = {};
  //   App.cable = ActionCable.createConsumer(
  //     "ws://localhost:3000/cable",
  //     yourToken
  //   );
  //   const subscription = App.cable.subscriptions.create(
  //     { channel: "ChatroomsChannel", message_id: "3" },
  //     {
  //       connected: () => {},
  //       disconnected: () => {},
  //       received: data => {
  //         console.log(App);
  //       }
  //     }
  //   );
  // };
  //
  // componentWillUnmount() {
  //   this.subscription &&
  //     this.context.cable.subscriptions.remove(this.subscription);
  // }

  // componentDidMount() {
  //   fetch();
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
