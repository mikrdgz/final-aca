import React from "react";
import {
    H2,
    Flex,
    Text,
    Panel,
    Button,
    H0,
    H1,
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
                title="Is it paleo?"
                text="Easily search your favorite foods to see if they're Paleo friendly! Our app provides a simple answer to a sometimes complicated question. Don’t worry about trying to read up on the various forms of the Paleo way of life, just search your favorite foods on the app and get the answer you need, and the nutritional value at the click of a button."
              />
            </div>
          </Text>
        </Panel>
        <Panel>
          <Text>
            <div class="paragraph-container">
              <ParagraphTextRight
                image="undraw_percentages_0rur.png"
                alt="image"
                title="Easily record your searches"
                text="Save your most recent searches to your profile and keep a record of your diet for goal-setting or just insight into the overall make-up of your diet. "
              />
            </div>
          </Text>
        </Panel>
        <Panel>
          <Text>
            <div class="paragraph-container">
              <ParagraphTextLeft
                image="undraw_fitness_tracker_3033.png"
                alt="image"
                title="Keep track of your diet"
                text="Making the Paleo diet a part of your everyday life has never been easier! Searching and saving the foods you eat on a daily basis will allow you to keep tabs on the overall health of your diet, and the nature of the foods you're eating. Take control of your diet, and easily make a lifestyle change!"
              />
            </div>
          </Text>
        </Panel>
        <Panel>
          <Text>
            <div class="paragraph-container">
              <ParagraphTextRight
                image="undraw_finish_line_katerina_limpitsouni_xy20.png"
                alt="image"
                title="Set attainable goals"
                text="Use your saved foods to set attainable goals for your diet, and easily track your progress from your profile by saving foods from your searches."
              />
            </div>
          </Text>
        </Panel>
      </div>
    );
  }
}
export default Home;