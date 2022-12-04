import { React, useState, useEffect } from "react";
import { doc, setDoc, getDocs, collection } from "firebase/firestore/lite";
import db from "../../firestore";
import shakeHand from "./../../images/shakeHand.svg";

const Contact = () => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    query: "",
  });
  // const [db, setDb] = useState(null)
  const [formDetailsError, setFormDetailsError] = useState({
    nameError: "",
    emailError: "",
    mobileNumberError: "",
    queryError: "",
  });

  const handleChange = (e) => {
    setFormDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    let nameerror = "";
    let emailerror = "";
    let queryerror = "";
    let mobileerror = "";

    if (!formDetails.name) {
      nameerror = "Blank Name";
    }

    if (!emailRegex.test(formDetails.email)) {
      emailerror = "Invalid Email";
    }

    if (!formDetails.mobileNumber || !!formDetails.mobileNumber.length === 13) {
      mobileerror = "Invalid Mobile No";
    }

    if (!formDetails.query) {
      queryerror = "Oops You Forget To Write";
    }

    if (emailerror || nameerror || mobileerror || queryerror) {
      setFormDetailsError({
        emailError: emailerror,
        nameError: nameerror,
        mobileNumberError: mobileerror,
        queryError: queryerror,
      });
      return false;
    }

    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const saveMessage = async () => {
       await setDoc(
          doc(db, "Message", String(new Date().getTime())),
          formDetails
        ).then(()=>{
          setFormDetails({
            name: "",
            email: "",
            mobileNumber: "",
            query: "",
          });
        })
      };
      saveMessage();
    } else {
      console.error("some thing went wrong");
    }
  };

  return (
    <div className="container padding-10 margin-top-40" id="contact">
      <h1 className="page-heading">Get In Touch</h1>
      <div className="display-flex">
        <div className="card thankyou-card margin-top-40 hide-on-med-and-down">
          <img src={shakeHand} className="shake-hand" alt="hand-shake" />
          <p className="thankyou-note">Thank You</p>
          <p className="query">Do You Have Any Queries?</p>
        </div>
        <div className="card app-card getintouch-card margin-top-40 display-flex">
          <div className="">
            <form>
              <div className="row ">
                <div className="col m4 s12">
                  <label className="label">Name</label>
                  <input
                    className="getintouch-input browser-default"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formDetails.name}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  {formDetailsError.nameError ? (
                    <div className="form-show">
                      {formDetailsError.nameError}
                    </div>
                  ) : (
                    <div className="form-hide">
                      {formDetailsError.nameError}
                    </div>
                  )}
                </div>
                <div className="col m4 s12">
                  <label className="label">Email</label>
                  <input
                    className="getintouch-input browser-default"
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={formDetails.email}
                    onChange={(e) => handleChange(e)}
                  />
                  {formDetailsError.emailError ? (
                    <div className="form-show">
                      {formDetailsError.emailError}
                    </div>
                  ) : (
                    <div className="form-hide">
                      {formDetailsError.emailError}
                    </div>
                  )}
                </div>
                <div className="col m4 s12">
                  <label className="label">Mobile Number</label>

                  <input
                    className="getintouch-input browser-default"
                    type="text"
                    name="mobileNumber"
                    placeholder="1234567891"
                    value={formDetails.mobileNumber}
                    onChange={(e) => handleChange(e)}
                  />
                  {formDetailsError.mobileNumberError ? (
                    <div className="form-show">
                      {formDetailsError.mobileNumberError}
                    </div>
                  ) : (
                    <div className="form-hide">
                      {formDetailsError.mobileNumberError}
                    </div>
                  )}
                </div>
                <div className="col m12 s12">
                  <label className="label">Message</label>

                  <textarea
                    className="getintouch-input-textarea browser-default"
                    type="text"
                    name="query"
                    placeholder="Hey there!"
                    value={formDetails.query}
                    onChange={(e) => handleChange(e)}
                  />
                  {formDetailsError.queryError ? (
                    <div className="form-show">
                      {formDetailsError.queryError}
                    </div>
                  ) : (
                    <div className="form-hide">
                      {formDetailsError.queryError}
                    </div>
                  )}
                </div>
              </div>
              <div className="btn-align">
                <a type="submit" onClick={(e) => onSubmit(e)} href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>Submit
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
