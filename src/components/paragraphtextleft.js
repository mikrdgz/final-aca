import React from  'react';

function ParagraphTextLeft(props) {
    return (
      <div class="paragraph-container">
      <img src={props.image}></img>
      <div>
        <h1>{props.title}</h1>
        {props.text}
      </div>
      </div>

    )
  }
  
  export default ParagraphTextLeft;

 