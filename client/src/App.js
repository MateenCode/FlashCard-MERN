import React, { Component } from "react";
import { Container } from "reactstrap";
import { Provider } from "./context/context";
import "./css/App.css";

import Header from "./components/Header";
import CardList from "./components/CardList";

/* Features
1. Create new Flashcards
2. Edit Flashcard Questions and Answers
3. Delete Flashcards
4. Answer Shown When requested.
5. Ability to self grade your own answer
6. Sort cards by answer ranking ascending
   Bad Answer => Rank = 0
   Good Answer => Rank = Rank + 1
   Great Great => Rank = Rank + 2 */

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
