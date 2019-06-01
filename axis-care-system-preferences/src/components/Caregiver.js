import React from "react";
import { ListGroup } from "react-bootstrap";

class Caregiver extends React.Component {
  render() {
    return (
      <>
        <ListGroup
          style={{
            boxShadow: "1px 1px 5px 1px #80808022",
            display: "flex",
            width: "40rem",
            borderRadius: "6px",
            margin: "2% auto auto 0"
          }}
        >
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </>
    );
  }
}

export default Caregiver;
