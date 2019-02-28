import React, { Component } from "react";
import { Container } from "reactstrap";
import "./css/App.css";

import Header from "./components/Header";
import Flist from "./components/FList";
import Flashcard from "./components/Flashcard";

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
  state = {
    toggleForm: false
  };

  toggleForm = () => {
    this.setState({
      toggleForm: !this.state.toggleForm
    });
  };

  render() {
    return (
      <Container>
        <Header toggleForm={this.toggleForm} />
        <Flist toggle={this.state.toggleForm} />
      </Container>
    );
  }
}

export default App;
