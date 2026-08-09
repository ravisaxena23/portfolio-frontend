import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore/lite";
import db from "../../firestore";
import useReveal from "../../hooks/useReveal";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emptyForm = {
  name: "",
  email: "",
  mobileNumber: "",
  query: "",
};

const Contact = () => {
  const { ref, visible } = useReveal();
  const [formDetails, setFormDetails] = useState(emptyForm);
  const [formDetailsError, setFormDetailsError] = useState({
    nameError: "",
    emailError: "",
    mobileNumberError: "",
    queryError: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    setFormDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const nameError = formDetails.name.trim() ? "" : "Name is required";
    const emailError = EMAIL_REGEX.test(formDetails.email)
      ? ""
      : "Enter a valid email";
    const digits = formDetails.mobileNumber.replace(/\D/g, "");
    const mobileNumberError =
      digits.length >= 10 && digits.length <= 13
        ? ""
        : "Enter a valid mobile number";
    const queryError = formDetails.query.trim()
      ? ""
      : "Please write a short message";

    setFormDetailsError({
      nameError,
      emailError,
      mobileNumberError,
      queryError,
    });

    return !(nameError || emailError || mobileNumberError || queryError);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      await setDoc(doc(db, "Message", String(Date.now())), {
        ...formDetails,
        createdAt: new Date().toISOString(),
      });
      setFormDetails(emptyForm);
      setFormDetailsError({
        nameError: "",
        emailError: "",
        mobileNumberError: "",
        queryError: "",
      });
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className={`section contact reveal ${visible ? "is-visible" : ""}`}
      ref={ref}
    >
      <p className="section-kicker">Contact</p>
      <h2 className="section-heading">Let&apos;s work together</h2>
      <p className="section-lede">
        Have a role, project, or question? Send a note — I read every message.
      </p>

      <form className="contact-form" onSubmit={onSubmit} noValidate>
        <div className="contact-form__row">
          <label className="contact-field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Jane Doe"
              value={formDetails.name}
              onChange={handleChange}
              autoComplete="name"
            />
            {formDetailsError.nameError ? (
              <em className="contact-field__error">{formDetailsError.nameError}</em>
            ) : null}
          </label>

          <label className="contact-field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="jane@company.com"
              value={formDetails.email}
              onChange={handleChange}
              autoComplete="email"
            />
            {formDetailsError.emailError ? (
              <em className="contact-field__error">{formDetailsError.emailError}</em>
            ) : null}
          </label>

          <label className="contact-field">
            <span>Mobile</span>
            <input
              type="tel"
              name="mobileNumber"
              placeholder="+91 98765 43210"
              value={formDetails.mobileNumber}
              onChange={handleChange}
              autoComplete="tel"
            />
            {formDetailsError.mobileNumberError ? (
              <em className="contact-field__error">
                {formDetailsError.mobileNumberError}
              </em>
            ) : null}
          </label>
        </div>

        <label className="contact-field contact-field--full">
          <span>Message</span>
          <textarea
            name="query"
            placeholder="Hey Ravi — let's talk about…"
            value={formDetails.query}
            onChange={handleChange}
            rows={5}
          />
          {formDetailsError.queryError ? (
            <em className="contact-field__error">{formDetailsError.queryError}</em>
          ) : null}
        </label>

        <div className="contact-form__actions">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : "Send message"}
          </button>
          {status === "success" ? (
            <p className="contact-form__status is-success" role="status">
              Message sent. Talk soon.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="contact-form__status is-error" role="alert">
              Could not send. Please try again or email me directly.
            </p>
          ) : null}
        </div>
      </form>
    </section>
  );
};

export default Contact;
