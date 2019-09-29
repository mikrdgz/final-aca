import React from  'react';

function ParagraphTextRight(props) {
    return (
      <div class="paragraph-container">
      <div>
        <h1>{props.title}</h1>
        {props.text}
      </div>
      <img src={props.image}></img>
      </div>

    )
  }
  
  export default ParagraphTextRight;