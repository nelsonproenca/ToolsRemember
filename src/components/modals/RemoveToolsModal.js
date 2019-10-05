import React, { Fragment, useState } from "react";

import { Modal, Button, Alert } from "react-bootstrap";

const RemoveToolsModal = props => {
  const [show, setShow] = useState(false);
  const [remove, setRemove] = useState(false);

  const handleClose = () => setShow(false);
  const handleRemove = () => setRemove(true);

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

        <Modal.Body>Are you sure want to remove {props.recipient}</Modal.Body>

        <Modal.Footer>
          {!remove && (
            <Fragment>
              <Button variant="primary" block="true" onClick={handleRemove}>
                Yes, remove
              </Button>
            </Fragment>
          )}

          {remove && <Alert variant="success">Success !!! Tool removed.</Alert>}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RemoveToolsModal;
