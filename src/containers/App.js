import React, { Fragment, Component } from "react";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  ButtonToolbar
} from "react-bootstrap";

import { store } from "../reducerTools/store";

import AddToolsModal from "../components/modals/AddToolsModal";
import ToolsList from "./ToolsList";

class App extends Component {
  state = {
    modalShow: false,
    tags: "",
    tools: []
  };

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());

    store.dispatch({
      type: "SEARCH_TOOL",
      criteria: ""
    });
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      tags: value
    });
  };

  handleKeyPress = event => {
    console.log("event", event);
    if (event === "Enter") {
      console.log("tags", this.state.tags);

      store.dispatch({
        type: "SEARCH_TOOL",
        criteria: this.state.tags
      });
    }
  };

  setModalShow = () => {
    let newModalShow = this.state.modalShow;

    this.setState({
      modalShow: !newModalShow
    });
  };

  render() {
    const tools = store.getState().tools;

    return (
      <Fragment>
        <Container>
          <h1>VUTTR</h1>
          <p>Very Useful Tools to Remember</p>
        </Container>

        <Container>
          <Form>
            <Row>
              <Col md="4">
                <Form.Control
                  type="text"
                  placeholder="Search ..."
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}
                />
              </Col>
              <Col>
                <Form.Check
                  custom
                  label="search in tags only"
                  type="checkbox"
                  id="inline-2"
                />
              </Col>
              <Col md="2">
                <ButtonToolbar>
                  <Button
                    variant="primary"
                    block="true"
                    onClick={this.setModalShow}
                  >
                    Add
                  </Button>

                  <AddToolsModal
                    show={this.state.modalShow}
                    onHide={this.setModalShow}
                  />
                </ButtonToolbar>
              </Col>
            </Row>
            <Row>
              <ToolsList tools={tools} />
            </Row>
          </Form>
        </Container>
      </Fragment>
    );
  }
}

export default App;
