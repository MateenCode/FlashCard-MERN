import React, { Component } from "react";
import { Consumer } from "../context/context";
import { Row, Col, Button } from "reactstrap";
import Form from "../components/Form";
import CardItem from "../components/CardItem";
import axios from "axios";

export default class CardList extends Component {
  state = {
    modal: false
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  addCard = (dispatch, card) => {
    const question = card.question;
    const answer = card.answer;
    dispatch({ type: "ADD_CONTACT", payload: card });
    axios.post("api/flashcard/add", { question, answer });
  };

  handleToggle = () => {};

  render() {
    return (
      <Consumer>
        {value => {
          const { cards, dispatch } = value;
          return (
            <React.Fragment>
              <Button color="success" onClick={this.toggleModal}>
                <i className="fas fa-plus" /> Add Flashcard
              </Button>
              <Form
                modal={this.state.modal}
                toggleModal={this.toggleModal}
                addCard={this.addCard.bind(this, dispatch)}
              />

              <Row>
                {cards.map(card => {
                  return (
                    <Col key={card._id}>
                      <CardItem card={card} handleToggle={this.handleToggle} />
                    </Col>
                  );
                })}
              </Row>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
