import { Component } from "react";
/* import Homepage from './homePage/Homepage' */
import AgentPage from './agent-page/AgentPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Homepage/> */}
        <AgentPage/>
      </div>
    );
  }
}

export default App;
