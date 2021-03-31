import { Component } from "react";
import ListingsPage from "./listings-page/ListingsPage";


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
      </div>
    );
  }
}

export default App;
