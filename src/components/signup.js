import React, { Component } from "react";
import {
  H2,
  Flex,
  Text,
  Panel,
  Button,
  GlobalStyles,
  H0,
  H1,
  Modal,
  Form,
  Input,
  Box
} from "@bigcommerce/big-design";

class SignUp extends React.Component {
  state = {};

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };
  render() {
    return (
      <>
        <Button variant="secondary" onClick={this.openModal}>
          sign up
        </Button>

        <Modal
          isOpen={this.state.isOpen}
          onClose={this.state.closeModal}
          closeOnEscKey={true}
          closeOnClickOutside={false}
        >
          <Modal.Header>Sign up!</Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group>
                <Input label="Name" type="name" placeholder="Name" />
              </Form.Group>
              <Form.Group>
                <Input label="Email" type="email" placeholder="Email address" />
              </Form.Group>
              <Form.Group>
                <Input
                  label="Password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Actions>
            <Button variant="subtle" onClick={this.closeModal}>
              Cancel
            </Button>

            <Button variant="secondary" onClick={this.closeModal}>
              sign up
            </Button>
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}
export default SignUp;
