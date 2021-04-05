import React from "react";
import "./Account.css";
import Profile from "../../images/profile-picture.png";

const Account = () => {
  return (
    <div className="account-info">
      <div className="account-header">
        <h2 className="account-title">Personal Information</h2>
        <p className="account-text">
          You can update/edit your account information here
        </p>
      </div>

      <div className="row account-box">
        <div className="col-4">
          <img src={Profile} alt="profile-img" className="account-img" />
        </div>
        <div className="col-8">
          <form action="" className="update-account">
            <div class="row form-group info-group">
              <div className="col-4">
                <label class="label-text" for="email">
                  First Name
                </label>
              </div>
              <div className="col-8 update-input">
                <input
                  type="text"
                  class="form-control"
                  id="account-fname"
                  required
                />
              </div>
            </div>
            <div class="row form-group info-group">
              <div className="col-4">
                <label class="label-text" for="email">
                  Last Name
                </label>
              </div>
              <div className="col-8 update-input">
                <input
                  type="text"
                  class="form-control"
                  id="account-lname"
                  required
                />
              </div>
            </div>

            <div class="row form-group info-group">
              <div className="col-4">
                <label class="label-text" for="email">
                  Email
                </label>
              </div>
              <div className="col-8 update-input">
                <input
                  type="email"
                  class="form-control"
                  id="account-email"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
            </div>
            <div class="row form-group info-group">
              <div className="col-4">
                <label class="label-text" for="email">
                  Phone Number
                </label>
              </div>
              <div className="col-8 update-input">
                <input
                  type="text"
                  class="form-control"
                  id="account-phoneNumber"
                  required
                />
              </div>
            </div>
            <div class="row form-group info-group">
              <div className="col-4">
                <label class="label-text" for="email">
                  Existing Password
                </label>
              </div>
              <div className="col-8 update-input">
                <input
                  type="text"
                  class="form-control"
                  id="account-existPassword"
                  required
                />
              </div>
            </div>
            <div class="row form-group info-group">
              <div className="col-4">
                <label class="label-text" for="email">
                  New password
                </label>
              </div>
              <div className="col-8 update-input">
                <input
                  type="text"
                  class="form-control"
                  id="account-newPassword"
                  required
                />
              </div>
            </div>
            <div class="row form-group info-group">
              <div className="col-4">
                <label class="label-text" for="email">
                  Confirm New Password
                </label>
              </div>
              <div className="col-8 update-input">
                <input
                  type="text"
                  class="form-control"
                  id="account-confirmPassword"
                  required
                />
              </div>

              <div className="update-btn">
                <button type="button" class="btn btn-lg btn-danger">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <h2 className="account-title">Booked Appointments</h2>
    </div>
  );
};

//links
// https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png

export default Account;
