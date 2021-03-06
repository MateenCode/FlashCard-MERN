import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return {
        ...state,
        cards: [action.payload, ...state.cards]
      };
    case "DELETE_CARD":
      return {
        ...state,
        cards: state.cards.filter(card => card._id !== action.payload)
      };
    case "TOGGLE_CARD":
      return {
        ...state,
        cards: state.cards.map(card => {
          if (card._id === action.payload) {
            return {
              ...card,
              toggle: !card.toggle
            };
          } else {
            return card;
          }
        })
      };
    case "RANK_CARD":
      return {
        ...state,
        cards: state.cards.map(card => {
          if (card._id === action.payload) {
            return {
              ...card,
              rank: action.rank
            };
          } else {
            return card;
          }
        })
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
    console.log(res.data);
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
