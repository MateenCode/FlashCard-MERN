import React, { Component } from "react";
import { Container } from "reactstrap";
import { Provider } from "./context/context";
import "./css/App.css";

import Header from "./components/Header";
import CardList from "./components/CardList";

class App extends Component {
  // toggle = () => {
  //   this.setState({
  //     toggle: !this.state.toggle
  //   });
  // };

  render() {
    return (
      <Provider>
        <Container>
          <Header />
          <CardList />
        </Container>
      </Provider>
    );
  }
}

export default App;
