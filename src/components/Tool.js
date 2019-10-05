import React from "react";

import {
  Alert,
  Container,
  Row,
  Col,
  ButtonToolbar,
  Button
} from "react-bootstrap";

import RemoveToolsModal from "../components/modals/RemoveToolsModal";

const Tool = props => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container variant="">
      <Row>
        <Col lg="12 border">
          <Row>
            <Col md="11">
              <Alert.Link href={props.tool.Link}>{props.tool.Name}</Alert.Link>
            </Col>
            <Col md="1">
              <ButtonToolbar>
                <Button variant="link" onClick={() => setModalShow(true)}>
                  Remover
                </Button>

                <RemoveToolsModal
                  index={props.index}
                  recipient={props.tool}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </ButtonToolbar>
            </Col>
          </Row>
          <Row>{props.tool.Description}</Row>
          <Row>Tags : {props.tool.Tags}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Tool;
