import React from "react";
import {
    H2,
    Flex,
    Text,
    Panel,
    Button,
    H0,
    H1
  } from "@bigcommerce/big-design";
import ParagraphTextLeft from "./paragraphtextleft";
import ParagraphTextRight from "./paragraphtextright";
import NavName from "./navigation";
import SignUp from "./signup";
import SignIn from "./signin";
import {Link} from "react-router-dom";
import Search from "./search";


class Home extends React.Component {
  render() {
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
            <Button variant="secondary"><Link to="/user">my foods</Link></Button>
          </Flex.Item>
        </Flex>
        <div class="navspace">
          <Text>
            <H0>Is it paleo?</H0>
            <H1>Discover the foods that will nourish your mind and body</H1>
          </Text>
          <Search/>    

        </div>
        <Panel>
          <Text>
            <div class="paragraph-container">
              <ParagraphTextLeft
                image="undraw_hiking_d24r.png"
                alt="image"
                title="title"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            </div>
          </Text>
        </Panel>
        <Panel>
          <Text>
            <div class="paragraph-container">
              <ParagraphTextRight
                image="undraw_hiking_d24r.png"
                alt="image"
                title="title here"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            </div>
          </Text>
        </Panel>
        <Panel>
          <Text>
            <div class="paragraph-container">
              <ParagraphTextLeft
                image="undraw_hiking_d24r.png"
                alt="image"
                title="title here"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            </div>
          </Text>
        </Panel>
        <Panel>
          <Text>
            <div class="paragraph-container">
              <ParagraphTextRight
                image="undraw_hiking_d24r.png"
                alt="image"
                title="title here"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            </div>
          </Text>
        </Panel>
      </div>
    );
  }
}
export default Home;