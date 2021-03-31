import { Component } from "react";
import ListingsPage from "./listings-page/ListingsPage";

import Homepage from './homePage/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Homepage></Homepage>
      </div>
    );
  }
}

export default App;
