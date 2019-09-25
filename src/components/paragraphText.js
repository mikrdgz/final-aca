import React from  'react';

function ParagraphText(props) {
    return (
      <div class="box">
      <img src={props.image}></img>

      <div>{props.text}</div>
      </div>

    )
  }
  
  export default ParagraphText;

  <ParagraphText image="htttps://www.com" text="Hi welcome to our app." />