import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

export default function CardItem(props) {
  return (
    <Card className="card text-white mt-3">
      <CardBody>
        <CardTitle className="font-weight-bold">Question</CardTitle>
        <CardText>{props.card.question}</CardText>
      </CardBody>
      <CardBody>
        <CardTitle
          onClick={props.handleToggle}
          className="card_title font-weight-bold"
        >
          Show Answer
        </CardTitle>
        {props.card.toggle && <CardText>{props.card.answer}</CardText>}
      </CardBody>
    </Card>
  );
}
