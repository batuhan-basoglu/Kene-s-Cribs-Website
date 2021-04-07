import React, { useEffect } from "react";
import Footer from "./shared-components/footer-component/Footer";
import Navbar from "./shared-components/navbar-component/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import HomePage from "./homePage/Homepage";
import ListingsPage from "./listings-page/ListingsPage";
import AgentPage from "./agent-page/AgentPage";
import ListingPage from "./listings-page/single-listing/listing-page";
import Login from "./login-page/Login";
import Account from "./login-page/account/Account";
import ContactUs from "./shared-components/contact-us/contact-us";

const langauges = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

function App() {
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = langauges.find(
    (lang) => lang.code === currentLanguageCode
  );
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);
  return (
    <div className="App">
      {/* create the translations button */}
      <div className="container">
        <div className="d-flex justify-content-end">
          {/* <!-- Example single danger button --> */}
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-link dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-globe"></i>
            </button>
            <div class="dropdown-menu">
              {langauges.map(({ code, name, country_code }) => (
                <button
                  class="dropdown-item"
                  key={code}
                  onClick={() => i18next.changeLanguage(code)}
                  disabled={code === currentLanguageCode}
                >
                  <span
                    className={`flag-icon flag-icon-${country_code} mx-2`}
                  ></span>
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
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
