import React from  'react';
import { H2, Flex, Text, Panel, Button, GlobalStyles, H0, H1, Modal, Form, Input, Box } from '@bigcommerce/big-design';


function SignUp() {

    const [isOpen, setIsOpen] = React.useState(false);
  
    return (
      <>
        <Button variant="secondary" onClick={() => setIsOpen(true)}>sign up</Button>
  
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} closeOnEscKey={true} closeOnClickOutside={false}>
          <Modal.Header>Sign up!</Modal.Header>
  
          <Modal.Body>
            <Form>
            <Form.Group>
                <Input
                    label="Name"
                    type="name"
                    placeholder="Name"
                 />
             </Form.Group>
             <Form.Group>
                <Input
                    label="Email"
                    type="email"
                    placeholder="Email address"
                 />
             </Form.Group>
            <Form.Group>
                <Input label="Password" type="password" placeholder="Password" />
            </Form.Group>
            
            </Form>
          </Modal.Body>
  
          <Modal.Actions>
            <Button variant="subtle" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>

            <Button variant="secondary" onClick={() => setIsOpen(false)}>
                sign up
            </Button>
          </Modal.Actions>
        </Modal>
      </>
    );
  }
export default SignUp;