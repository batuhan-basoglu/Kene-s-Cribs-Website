import { Component } from "react";
import "./Homepage.css";
import house1 from "../images/house1.jpg";
import house2 from "../images/house2.jpg";
import house3 from "../images/house3.jpg";
import Carousel from "react-bootstrap/Carousel";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    };
  }

  render() {
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
        <section className="white-section" id="white-section">
          <div className="housesIntro">
            <Carousel>
              <Carousel.Item>
                <img className="headerImg" src={house1} alt="First House" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="headerImg" src={house2} alt="Second House" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="headerImg" src={house3} alt="Third House" />
              </Carousel.Item>
            </Carousel>
          </div>
        </section>
        <section class="colored-section" id="contact">
          <div className="container-fluid">
            <div className="contactIntro">
              <h2 className="heading-1">Contact Us</h2>
              <form
                id="contact-form"
                onSubmit={this.handleSubmit.bind(this)}
                method="POST"
              >
                <div className="formhelper row">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      value={this.state.name}
                      onChange={this.onNameChange.bind(this)}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      value={this.state.name}
                      onChange={this.onNameChange.bind(this)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    aria-describedby="emailHelp"
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    rows="5"
                    value={this.state.message}
                    onChange={this.onMessageChange.bind(this)}
                  />
                </div>
                <div className="buttonhelper">
                  <button type="submit" className="button-1">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {}
}

export default Homepage;
