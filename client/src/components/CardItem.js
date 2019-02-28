import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

export default function CardItem(props) {
  return (
    <Card color="warning" className="card text-white m-3">
      <CardBody>
        <CardTitle>Question</CardTitle>
        <CardText>{props.card.question}</CardText>
      </CardBody>
      <CardBody>
        <CardTitle>Answer</CardTitle>
        <CardText>{props.card.answer}</CardText>
      </CardBody>
    </Card>
  );
}
