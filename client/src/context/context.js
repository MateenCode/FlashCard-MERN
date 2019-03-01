import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        cards: [action.payload, ...state.cards]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    cards: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    const res = await axios.get("api/flashcard/all");

    this.setState({ cards: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
