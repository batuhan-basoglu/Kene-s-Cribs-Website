import { Component } from "react";
import './Homepage.css';
import house1 from '../images/house1.jpg';
import house2 from '../images/house2.jpg';
import house3 from '../images/house3.jpg';
import Carousel from 'react-bootstrap/Carousel'

class Homepage extends Component {
    render() {
        return (
            <div className="Homepage">
                <section className="colored-section2" id="title">
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
                                <img
                                    className="headerImg"
                                    src={house1}
                                    alt="First House"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="headerImg"
                                    src={house2}
                                    alt="Second House"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="headerImg"
                                    src={house3}
                                    alt="Third House"
                                />

                            </Carousel.Item>
                        </Carousel>
                    </div>
                </section>
            </div>
        );
    }
}

export default Homepage;
