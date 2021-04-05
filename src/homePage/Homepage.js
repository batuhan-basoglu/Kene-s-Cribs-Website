import { Component } from "react";
import "./Homepage.css";
import house1 from "../images/house1.jpg";
import house2 from "../images/house2.jpg";
import house3 from "../images/house3.jpg";
import house4 from "../images/house4.jpg";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";



class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextIcon: <span className="next-icon"></span>,
      prevIcon: <span className="prev-icon"></span>,
    };
  }

  render() {
    const { nextIcon, prevIcon } = this.state;
    return (
      <div className="homePage">
        <section className="colored-section" id="title">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h1 className="big-heading">YOU ARE NOT BUYING A HOUSE, </h1>
                <h1 className="big-heading">YOU ARE BUYING A LIFESTYLE. </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="white-section">
          <div className="housesIntro">
            <Carousel nextIcon={nextIcon} prevIcon={prevIcon}>
              <Carousel.Item>
                <img className="headerImg" src={house1} alt="First House" />
                <Carousel.Caption>
                  <h3 style={{ fontSize: "250%", textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black" }}>100 Charlie Rogers, Kanata, ON K2V 1A7</h3>
                  <h2 style={{ fontSize: "150%", textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black" }}>1 Bedroom, 2 Bathroom</h2>
                  <div className="buttonka">
                    <Button href="/listings" variant="info">Click for Details</Button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="headerImg" src={house2} alt="Second House" />
                <Carousel.Caption>
                  <h3 style={{ fontSize: "250%", textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black" }}>1490 Youville Drive, Orléans, ON K1C 2X8</h3>
                  <h2 style={{ fontSize: "150%", textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black" }}>1 Bedroom, 2 Bathroom</h2>
                  <div className="buttonka">
                    <Button href="/listings" variant="info">Click for Details</Button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="headerImg" src={house3} alt="Third House" />
                <Carousel.Caption>
                  <h3 style={{ fontSize: "250%", textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black" }}>8720 Russell Road, Navan, ON K4B 1J1</h3>
                  <h2 style={{ fontSize: "150%", textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black" }}>1 Bedroom, 2 Bathroom</h2>
                  <div className="buttonka">
                    <Button href="/listings" variant="info">Click for Details</Button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="headerImg" src={house4} alt="Fourth House" />
                <Carousel.Caption>
                  <h3 style={{ fontSize: "250%", textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black" }}>2785 8th Line Road, Metcalfe, ON K0A 2P0</h3>
                  <h2 style={{ fontSize: "150%", textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black" }}>1 Bedroom, 2 Bathroom</h2>
                  <div className="buttonka">
                    <Button href="/listings" variant="info">Click for Details</Button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <section className="colored-section" id="features">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <h2 style={{ paddingLeft: "22rem", paddingBottom: "1rem", fontFamily: "Trebuchet MS" }}>Description </h2>
                    <p style={{ fontSize: "110%" }}> Welcome to Kene's Cribs. Kene's Cribs is a real estator company which provides the clients with the houses. <br></br>
                  	 The houses limited to the clients are only limited to the clients' dreams. In order to further navigate the<br></br>
                     website, use the navigation bar to switch between pages. Listings page is for browsing houses, Agents page<br></br>
                     is for browsing the estators, the Contact Us page is for the contacting us and the login page is for our<br></br>
                     members who want to benefit from our deals. Above are some houses which can interest you. Feel free to<br></br>
                     click the buttons above to explore the houses you want. </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default Homepage;
