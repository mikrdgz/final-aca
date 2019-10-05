import React from "react";
import {
    H2,
    Flex,
    Text,
    Panel,
    Button,
    GlobalStyles,
    H0,
    H1
  } from "@bigcommerce/big-design";

import NavName from "./navigation";
import SignUp from "./signup";
import SignIn from "./signin";
import {Link} from "react-router-dom";


class User extends React.Component {
    state ={
        localFoods: ""
    }

    componentDidMount(){
        const foodInfo = JSON.parse(localStorage.getItem('foodInfo'));
        this.setState ({localFoods: foodInfo})
    }

    render(){
        console.log('test: ', this.state.localFoods.ingredients)
        return (
<div className="App">
        <Flex justifyContent="space-between" flexDirection="row">
          <Flex.Item>
            <H2>
              <NavName name="Kiley" />
            </H2>
          </Flex.Item>
          <Flex.Item>
            <SignUp />
            <SignIn />
            <Button variant="secondary"><Link to="/">home</Link></Button>
          </Flex.Item>
        </Flex>
        <div class="navspace">
          <Text>
            <H0>My saved foods</H0>
            
            
            <p>{this.state.localFoods.calories}</p>
          </Text>
        </div>
        </div>
        )
    }
}

export default User;