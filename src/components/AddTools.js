import React, { useState } from "react";

import { Form, FormControl, Button } from "react-bootstrap";

import { store } from "../reducerTools/store";

const AddTools = props => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const handleNameChange = ({ target: { value } }) => {
    setName(value);
  };

  const handleLinkChange = ({ target: { value } }) => {
    setLink(value);
  };

  const handleDescriptionChange = ({ target: { value } }) => {
    setDescription(value);
  };

  const handleTagsChange = ({ target: { value } }) => {
    setTags(value);
  };

  const handleSaveClick = () => {
    saveTool();
    props.onHide();
  };

  const saveTool = () => {
    store.dispatch({
      type: "ADD_TOOL",
      tool: {
        Name: name,
        Link: link,
        Description: description,
        Tags: tags
      }
    });
  };

  return (
    <>
      <Form.Group controlId="formGroupToolName">
        <Form.Label>Tool Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter tool name"
          onChange={handleNameChange}
        />
      </Form.Group>

      <Form.Group controlId="formGroupToolLink">
        <Form.Label>Tool Link:</Form.Label>
        <Form.Control
          type="url"
          placeholder="Enter tool link"
          onChange={handleLinkChange}
        />
      </Form.Group>

      <Form.Group controlId="formGroupToolLink">
        <Form.Label>Tool Description:</Form.Label>
        <FormControl
          as="textarea"
          aria-label="Enter tool description"
          placeholder="Enter tool description"
          onChange={handleDescriptionChange}
        />
      </Form.Group>

      <Form.Group controlId="formGroupToolLink">
        <Form.Label>Tags:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter tool tags"
          onChange={handleTagsChange}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        block="true"
        onClick={handleSaveClick}
      >
        Save
      </Button>
    </>
  );
};

export default AddTools;
