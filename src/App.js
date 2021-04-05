import { Component } from "react";
import Footer from "./shared-components/footer-component/Footer";
import Navbar from "./shared-components/navbar-component/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./homePage/Homepage";
import ListingsPage from "./listings-page/ListingsPage";
import AgentPage from "./agent-page/AgentPage";
import ContactUs from "./shared-components/contact-us/contact-us";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <Route exact path="/" component={HomePage}></Route>
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
