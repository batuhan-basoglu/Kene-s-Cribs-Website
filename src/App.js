import React from "react";
import Footer from "./shared-components/footer-component/Footer";
import Navbar from "./shared-components/navbar-component/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./homePage/Homepage";
import ListingsPage from "./listings-page/ListingsPage";
import AgentPage from "./agent-page/AgentPage";
import ListingPage from "./listings-page/single-listing/listing-page";
import Login from "./login-page/Login";
import Account from "./login-page/account/Account";
import ContactUs from "./shared-components/contact-us/contact-us";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/listings" component={ListingsPage}></Route>
          <Route path="/agents" component={AgentPage}></Route>
          <Route path="/listing-page" component={ListingPage}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/contact-us" component={ContactUs}></Route>
          <Route path="/account" component={Account}></Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
