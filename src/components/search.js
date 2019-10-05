import React, { Component } from "react";
import { Form, Input, Flex, Button, Panel } from "@bigcommerce/big-design";
import Result from './resultModal';

class Search extends Component {
  state = {
    searchParam: "",
    food: "",
    result: "",
    foodInfo: {}
  };

  onTextChange = e => {
    this.setState({ searchParam: e.target.value });
  };

  makeReqs = () => {
    this.setState({result: ""})
    
    const foodGet = `https://api.edamam.com/api/food-database/parser?ingr=${this.state.searchParam}&app_id=a80be76b&app_key=515b81c153ce8fd8518c687922f95767`;

    const foodPost =
      "https://api.edamam.com/api/food-database/nutrients?app_id=a80be76b&app_key=515b81c153ce8fd8518c687922f95767";

    fetch(foodGet)
      .then(res => res.json())
      .then(res => this.setState({ food: res.parsed[0].food.foodId }))
      .then(data => {
        return fetch(foodPost, {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ingredients: [
              {
                quantity: 1,
                measureURI:
                  "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
                foodId: this.state.food
              }
            ]
          })
        })
          .then(res => res.json())
          .then(res => {
           console.log('Res: ', res);
            this.setState({foodInfo: res})
            if (res.healthLabels.includes("PALEO")) {
            this.setState({result: "is paleo!"})
            } else {
              if (!res.healthLabels.includes("PALEO")) {
                this.setState({result: "is not paleo!"})
              }
            }
            this.setState({searchParam: ''})            
          })
      });
  };
  render() {
      if(this.state.result != ""){
        return (
            <Flex paddingBottom="xxLarge" justifyContent="center">
              <Flex.Item>
                <Form.Group>
                  <Input name="Search" type="text" onChange={this.onTextChange} value={this.state.searchParam }/>
                </Form.Group>
                <Button variant="primary" onClick={this.makeReqs}>
                  Search
                </Button>
                <Result result={this.state.result} foodInfo={this.state.foodInfo}/>
              </Flex.Item>
            </Flex>
          );
      } else {
        return (
            <Flex paddingBottom="xxLarge" justifyContent="center">
              <Flex.Item>
                <Form.Group>
                  <Input name="Search" type="text" onChange={this.onTextChange} value={this.state.searchParam }/>
                </Form.Group>
                <Button variant="primary" onClick={this.makeReqs}>
                  Search
                </Button>
              </Flex.Item>
            </Flex>
          );
      }
    
  }
}
export default Search;