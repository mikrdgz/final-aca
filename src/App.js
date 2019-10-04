import React from "react";
import Home from "./components/home"
import {
 
  // GlobalStyles
  
} from "@bigcommerce/big-design";
import "./App.css";
import "./default.css";
import {Route, Switch, BrowserRouter } from "react-router-dom";
// import { createBrowserHistory } from "history"
import User from "./components/user"

// const history = createBrowserHistory()


class App extends React.Component {
  render() {
   return (
     <>
     {/* <GlobalStyles/> */}
     <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/user" component={User}></Route>
      </Switch>
    </BrowserRouter>
    </>
   )
   }
  }


export default App;

//TODO: 
// - try and figure out how to programatically make requests with edamam APIs
