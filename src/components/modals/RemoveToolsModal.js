import React, { Fragment, useState } from "react";

import { Modal, Button, Alert } from "react-bootstrap";

import { store } from "../../reducerTools/store";

const RemoveToolsModal = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleRemove = () => {
    deleteTool();
    closeModal();
  };

  const deleteTool = () => {
    store.dispatch({
      type: "DELETE_TOOL",
      index: props.index
    });
  };

  const closeModal = () => {
    props.onHide();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Remove tools</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are you sure want to remove {props.recipient.Name} ?
        </Modal.Body>

        <Modal.Footer>
          <Fragment>
            <Button variant="primary" block="true" onClick={handleRemove}>
              Yes, remove
            </Button>
          </Fragment>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RemoveToolsModal;
