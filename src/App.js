import { Component } from "react";
import ListingsPage from "./listings-page/ListingsPage";

import Homepage from './homePage/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Kene's Cribs</h1>
          <p>Real Website loading.......</p>
        </header>
        <section>
        
          <ListingsPage />

        </section>
          <Homepage></Homepage>
      </div>
    );
  }
}

export default App;
