import React, { Component } from "react";
import "./Contact-us.css";
import axios from 'axios'
import {
  FieldFeedback,
  FieldFeedbacks,
  FormWithConstraints
} from 'react-form-with-constraints';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
      agent: "",
      house: ""
    };
  }


  render() {
    return (
      <div className="contact-us">
        <div className="container">
          <section class="colored-section" id="contact">
            <div className="container-fluid">
              <div className="contactIntro">
                <h2 className="heading-1">Contact Us</h2>
                <FormWithConstraints ref={form => this.form = form}
                  id="contact-form"
                  onSubmit={this.handleSubmit.bind(this)}
                  method="POST"
                  noValidate
                >

                  <div className="row">
                    <div className="col-6">
                      <select className="form-group" name="agent" id="dropdown" onChange={this.onAgentChange.bind(this)} value={this.state.agent}>
                        <option selected>Select an Agent</option>
                        <option value="Michael">Michael</option>
                        <option value="Jin">Jin </option>
                        <option value="Anita">Anita</option>
                        <option value="Alex">Alex</option>
                        <option value="Xuan">Xuan</option>
                        <option value="Walter">Walter</option>
                        <option value="No preference">No preference</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <select className="form-group" name="house" id="dropdown" onChange={this.onHouseChange.bind(this)} value={this.state.house}>
                        <option selected>Select a House</option>
                        <option value="100 Charlie Rogers">100 Charlie Rogers</option>
                        <option value="1490 Youville Drive">1490 Youville Drive </option>
                        <option value="8720 Russell Road">8720 Russell Road</option>
                        <option value="2785 8th Line Road">2785 8th Line Road</option>
                        <option value="No preference">No preference</option>
                      </select>
                    </div>
                  </div>

                  <div className="formhelper row">
                    <div className="col-6">
                      <input name="firstname"
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        value={this.state.firstname}
                        required onChange={this.onFirstNameChange.bind(this)}
                      />
                      <FieldFeedbacks for="firstname">
                        <FieldFeedback when="*" />
                      </FieldFeedbacks>
                    </div>
                    <div className="col-6">
                      <input name="lastname"
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        value={this.state.lastname}
                        required onChange={this.onLastNameChange.bind(this)}
                      />
                      <FieldFeedbacks for="lastname">
                        <FieldFeedback when="*" />
                      </FieldFeedbacks>
                    </div>
                  </div>
                  <div className="form-group">
                    <input name="email"
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      aria-describedby="emailHelp"
                      value={this.state.email}
                      required onChange={this.onEmailChange.bind(this)}
                    />
                    <FieldFeedbacks for="email">
                      <FieldFeedback when="*" />
                    </FieldFeedbacks>
                  </div>
                  <div className="form-group">
                    <textarea name="message"
                      className="form-control"
                      placeholder="Message"
                      rows="5"
                      value={this.state.message}
                      required onChange={this.onMessageChange.bind(this)}
                    />
                    <FieldFeedbacks for="message">
                      <FieldFeedback when="*" />
                    </FieldFeedbacks>
                  </div>
                  <div className="buttonhelper">
                    <button type="submit" className="button-1">
                      Submit
                  </button>
                  </div>
                </FormWithConstraints>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }

  onAgentChange(event) {
    this.setState({ agent: event.target.value });
  }

  onHouseChange(event) {
    this.setState({ house: event.target.value });
  }

  onFirstNameChange(event) {
    this.setState({ firstname: event.target.value });
  }

  onLastNameChange(event) {
    this.setState({ lastname: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleChange = e => {
    this.form.validateFields(e.target);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.form.validateFields();

    if (!this.form.isValid()) {
      console.log('form is invalid: do not submit');
    } else {
      console.log('form is valid: submit');
    }

    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm() {
    this.setState({ firstname: '', lastname: '', email: '', message: '' })
  }
}


export default ContactUs;
