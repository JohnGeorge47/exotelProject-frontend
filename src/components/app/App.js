import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Contact from "../contact";
import Home from "../home";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
