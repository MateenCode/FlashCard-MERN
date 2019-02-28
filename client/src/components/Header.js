import React from "react";
import { Button } from "reactstrap";

export default function Header(props) {
  return (
    <React.Fragment>
      <h1>Flashcard Study</h1>
      <hr />
      <Button color="success" onClick={props.toggleForm}>
        +Add Flashcard
      </Button>
    </React.Fragment>
  );
}
