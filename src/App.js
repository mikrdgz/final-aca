import React, {Component} from 'react';
import { H2, Flex, Text, Panel, Button, GlobalStyles } from '@bigcommerce/big-design';
import './App.css'
import paragraphText from "./components/paragraphText";

function App() {
  return (

    <div className="App">
      <Panel>
        <Flex justifyContent="space-between" flexDirection="row">
          <Flex.Item>
            <H2>Is it Paleo?</H2>
          </Flex.Item>
          <Flex.Item>
          <Button variant="secondary" marginRight="medium">sign up</Button>  <Button variant="secondary">sign in</Button>
          </Flex.Item>
        </Flex>
        <Text>
          <img width="300px" src="https://i.imgur.com/AphMfav.png"></img>
    a brief summary of our app and why its cool
        </Text>

    
</Panel>
    </div>

  );
}


export default App;


