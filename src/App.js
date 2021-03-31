import { Component } from "react";
import Footer from "./shared-components/footer-component/Footer";
import Navbar from "./shared-components/navbar-component/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./homePage/homePage";
import ListingsPage from "./listings-page/listings-page";
import AgentPage from "./agent-page/agent-page";
import ContactUs from "./shared-components/Contact-us/Contact-us";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <Route path="/home" component={HomePage}></Route>
          <Route path="/listings" component={ListingsPage}></Route>
          <Route path="/agents" component={AgentPage}></Route>
          <Route path="/contact-us" component={ContactUs}></Route>
        </BrowserRouter>

        <Footer></Footer>
      </div>
    );
  }
}

export default App;
