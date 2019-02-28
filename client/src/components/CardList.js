import React, { Component } from "react";
import { Consumer } from "../context/context";
import { Button } from "reactstrap";
import Form from "../components/Form";
import CardItem from "../components/CardItem";

export default class CardList extends Component {
  state = {
    modal: false
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { cards } = value;
          return (
            <React.Fragment>
              <Button color="success" onClick={this.toggleModal}>
                <i className="fas fa-plus" /> Add Flashcard
              </Button>
              <Form modal={this.state.modal} toggleModal={this.toggleModal} />
              <div className="d-flex flex-row">
                {cards.map(card => {
                  return <CardItem key={card._id} card={card} />;
                })}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
