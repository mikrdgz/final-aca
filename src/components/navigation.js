import React from  'react';

class NavName extends React.Component {
    state = {
        isOpen:false
    }
    method = () => {
    }

    render (){
           return <div>Welcome, {this.props.name}!</div>
    }
}
           
  
export default NavName;