import React from 'react';
import { Button,
    Modal,
    Form,
    Input } from "@bigcommerce/big-design";

class ResultModal extends React.Component {

    state = {
        isOpen: true

    }
    
      closeModal = () => {
        this.setState({ isOpen: false });
      };  

    render(){
        return (
            <>
      
              <Modal
                isOpen={this.state.isOpen}
                onClose={this.state.closeModal}
                closeOnEscKey={true}
                closeOnClickOutside={false}
              >
                <Modal.Header>Is it Paleo?</Modal.Header>
      
                <Modal.Body>
                  this food is paleo
                </Modal.Body>
      
                <Modal.Actions>
                  <Button variant="subtle" onClick={this.closeModal}>
                    OK
                  </Button>
    
                </Modal.Actions>
              </Modal>
            </>
          )
    }
  }

  export default ResultModal