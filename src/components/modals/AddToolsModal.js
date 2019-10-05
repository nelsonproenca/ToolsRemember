import React from "react";

import { Modal, Button } from "react-bootstrap";

import AddTools from "../AddTools";

const AddToolsModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Add new tool</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <AddTools onHide={props.onHide} />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" block="true" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddToolsModal;
