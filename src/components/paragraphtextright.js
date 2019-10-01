import React from  'react';

class ParagraphTextRight extends React.Component {
    render(){
      return(
      <div class="paragraph-container">
      <div>
        <h1>{this.props.title}</h1>
        {this.props.text}
      </div>
      <img src={this.props.image}></img>
      </div>

    )}
  }
  
  export default ParagraphTextRight;