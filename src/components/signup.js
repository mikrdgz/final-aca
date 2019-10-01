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

class SignUp extends Component {
  
  submitUser =()=>{
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    fetch("/users", {
      method: "post",
      body: newUser,
      mode: "no-cors"
    }).then((res,err)=> res.json).then((res)=>console.log(res))
    this.closeModal()
  }

  state = {
    name: "",
    email: "",
    password: ""
  };

  onTextChange = e => this.setState({ [e.target.name]: e.target.value });

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
                <Input
                  label="Name"
                  name="name"
                  placeholder="Name"
                  onChange={this.onTextChange}
                />
              </Form.Group>
              <Form.Group>
                <Input
                  label="Email"
                  name="email"
                  placeholder="Email address"
                  onChange={this.onTextChange}
                />
              </Form.Group>
              <Form.Group>
                <Input
                  label="Password"
                  name="password"
                  placeholder="Password"
                  onChange={this.onTextChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Actions>
            <Button variant="subtle" onClick={this.closeModal}>
              Cancel
            </Button>

            <Button variant="secondary" onClick={this.submitUser} >
              Sign Up
            </Button>
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}
export default SignUp;
