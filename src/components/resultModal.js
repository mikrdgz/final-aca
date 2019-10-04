import React from 'react';
import { Button,
    Modal,
    Form,
    Input } from "@bigcommerce/big-design";
import Search from './search';

class ResultModal extends React.Component {

    state = {
        isOpen: true

    }
    
      closeModal = () => {
        this.setState({ isOpen: false });
      };  

    render(){
        console.log('props',this.props)
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
                    Paleo: {this.props.result}
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