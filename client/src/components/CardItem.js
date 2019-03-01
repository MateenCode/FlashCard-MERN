import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import { Button } from "reactstrap";

export default function CardItem(props) {
  return (
    <Card className="card text-white mt-3">
      <CardBody>
        <span
          onClick={props.handleToggle}
          className="trash float-right far fa-trash-alt "
        />
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
        {props.card.toggle && (
          <CardText>
            {props.card.answer}
            <Button color="danger" className="mt-2 mr-4">
              Bad
            </Button>
            <Button color="info" className="mt-2 mr-4">
              Good
            </Button>
            <Button color="success" className="mt-2 mr-4">
              Great
            </Button>
          </CardText>
        )}
      </CardBody>
    </Card>
  );
}
