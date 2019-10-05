import React from 'react';
import { Button,
    Modal,
    H1,
    Text } from "@bigcommerce/big-design";
import Search from './search';
import { tsThisType } from '@babel/types';

class ResultModal extends React.Component {

    state = {
        isOpen: true

    }
    
      closeModal = () => {
        this.setState({ isOpen: false });
      };  

    render(){
        console.log('props',this.props);
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
                    <H1>{this.props.foodInfo.ingredients[0].parsed[0].food} {this.props.result}</H1>
                    Calories: {this.props.foodInfo.calories}<br />
                    Fat: {this.props.foodInfo.totalNutrients.FAT.quantity} g <br />
                    Protein: {this.props.foodInfo.totalNutrients.PROCNT.quantity} g <br />
                </Modal.Body>
      
                <Modal.Actions>
                <Button variant="subtle" onClick={this.closeModal}>SAVE</Button>
                  <Button variant="subtle" onClick={this.closeModal}>OK</Button>
    
                </Modal.Actions>
              </Modal>
            </>
          )
    }
  }

  export default ResultModal