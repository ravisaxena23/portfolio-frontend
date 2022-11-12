import React, { useEffect, useState } from "react";
import Abstract from "../../images/abstract.svg";
import Editor from "../Common/editor/Editor";
import db from "../../firestore";
import { collection, getDocs } from "firebase/firestore/lite";
import gitHub from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";
import email from "../../images/email.svg";

const Home = () => {
  const [initialIntroduction, setInitialIntroduction] = useState({});

  useEffect(() => {
    const fetchInitialData = async () => {
      let initialData = collection(db, "InitialIntroduction");
      let initialDataSnapshot = await getDocs(initialData);
      initialDataSnapshot.forEach((doc) => {
        setInitialIntroduction(doc.data());
      });
    };
    fetchInitialData();
    console.log("initialIntro", initialIntroduction);
  }, []);

  console.log("initialIntro", initialIntroduction);
  return (
    <div className="home">
      <div className="content">
        <div className="text-content">
          <p className="capitalize-class">{initialIntroduction.salutation}</p>
          <h1 className="capitalize-class">{initialIntroduction.fullName}</h1>
          <p className="flow-text uppercase-class">
            {initialIntroduction.oneLiner}
          </p>
          <a
            className="resume-button"
            href={initialIntroduction.myResume}
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
          <span className="social-links">
            {/* add mailto:abc@xyz.com in doc for proper function */}
            <a
              href={initialIntroduction.mailMe}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="social-link-img"
                src={email}
                alt="mail-link"
                height="25"
                width="35"
              />
            </a>
            <a
              href={initialIntroduction.githubURL}
              target="_blank"
              rel="noreferrer"
            >
              <img className="social-link-img" src={gitHub} alt="github-link" />
            </a>
            <a
              href={initialIntroduction.linkedinURL}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="social-link-img"
                src={linkedin}
                alt="linkedin-link"
              />
            </a>
          </span>
        </div>
        <div className="hide-on-med-and-down class-editor-call">
          <Editor initialIntroduction={initialIntroduction}></Editor>
        </div>
      </div>

      <div></div>
      <div className="vector-class-1">
        <img className="abstract-vector" src={Abstract} alt="vector"></img>
      </div>
    </div>
  );
};

export default Home;
