import React from  'react';


class ParagraphTextLeft extends React.Component{

render(){
  return (
      <div class="paragraph-container">
      <img src={this.props.image}></img>
      <div>
        <h1>{this.props.title}</h1>
        {this.props.text}
      </div>
      </div>
      )
  }
}
  
  export default ParagraphTextLeft;

 