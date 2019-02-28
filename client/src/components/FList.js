import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default class FList extends Component {
  state = {
    question: "",
    answer: ""
  };

  render() {
    return (
      <div>
        {this.props.toggle && (
          <Card>
            <CardBody>
              <CardTitle>Question</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
            <CardBody>
              <CardTitle>Answer</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        )}
      </div>
    );
  }
}
