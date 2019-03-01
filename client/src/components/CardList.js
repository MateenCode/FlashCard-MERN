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
    dispatch({ type: "ADD_CARD", payload: card });
    axios.post("api/flashcard/add", { question, answer });
  };

  deleteCard = (dispatch, id) => {
    dispatch({ type: "DELETE_CARD", payload: id });
    axios.delete(`api/flashcard/delete/${id}`);
  };

  handleToggle = (dispatch, id) => {
    dispatch({ type: "TOGGLE_CARD", payload: id });
    axios.patch(`api/flashcard/toggle/${id}`);
  };

  handleRank = (dispatch, id, event) => {
    const rank = event.target.id;
    dispatch({ type: "RANK_CARD", payload: id, rank });
    axios.patch(`api/flashcard/rank/${id}`, { rank });
  };

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
                {cards
                  .sort((a, b) => a.rank - b.rank)
                  .map(card => {
                    return (
                      <Col key={card._id}>
                        <CardItem
                          card={card}
                          deleteCard={this.deleteCard.bind(
                            this,
                            dispatch,
                            card._id
                          )}
                          handleToggle={this.handleToggle.bind(
                            this,
                            dispatch,
                            card._id
                          )}
                          handleRank={this.handleRank.bind(
                            this,
                            dispatch,
                            card._id
                          )}
                        />
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
