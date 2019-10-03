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


class User extends React.Component {
    render(){
        return (
<div className="App">
        <Flex justifyContent="space-between" flexDirection="row">
          <Flex.Item>
            <H2>
              <NavName name="sunshine" />
            </H2>
          </Flex.Item>
          <Flex.Item>
            <SignUp />
            <SignIn />
          </Flex.Item>
        </Flex>
        <div class="navspace">
          <Text>
            <H0>My saved foods</H0>
            <H1>Here are saved foods</H1>
          </Text>
        </div>
        </div>
        )
    }
}

export default User;