import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, Tab, Row, Col, Sonnet } from "react-bootstrap";

class Caregiver extends React.Component {
  render() {
    return (
      <>
        <ListGroup
          style={{
            border: "solid 2px red",
            display: "flex",
            width: "40rem",
            borderRadius: "6px",
            margin: "4% auto auto 0"
          }}
        >
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        {/* </div> */}
      </>
    );
  }
}

export default Caregiver;
