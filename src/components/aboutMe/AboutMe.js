import { collection, getDocs } from "firebase/firestore/lite";
import { React, useEffect, useState } from "react";
import db from "../../firestore";
import AboutMeContentCard from "../Common/aboutMeContentCard/AboutMeContentCard";

const AboutMe = () => {
  const [myData, setmyData] = useState({});

  useEffect(() => {
    const fetchInitialData = async () => {
      let myData = collection(db, "aboutMe");
      let dataSnapshot = await getDocs(myData);
      dataSnapshot.forEach((doc) => {
        setmyData(doc.data());
      });
    };
    fetchInitialData();
  }, []);

  return (
    <div id="aboutMe" className="aboutMe">
      <h1 className="page-heading"> About Me</h1>
      <div className="display-flex">
        <div className="container div-with-background"></div>
      </div>
      <div className="row margin-top-150 content-container">
        <div className=" col s12 m4">
          <div className="my-img box-shadow">
            <img
              src={myData.imageURL}
              className="profile-image"
              alt="profile"
            ></img>
          </div>
        </div>
        <div className=" col s12 m8 my-information">
          <p>
            {myData.informationPara1}
            <a
              href={myData.currentCompanyURL}
              className="margin-left-5 margin-right-5"
            >
              {myData.currentCompany}
            </a>
            {myData.informationPara2}
          </p>
          <p>{myData.informationPara3}</p>
        </div>
      </div>
      <div className="row margin-60">
        <AboutMeContentCard content={myData.thingsILoveContent1} img={myData.thingsILoveImgURL1}></AboutMeContentCard>
        <AboutMeContentCard content={myData.thingsILoveContent2} img={myData.thingsILoveImgURL2}></AboutMeContentCard>
        <AboutMeContentCard content={myData.thingsILoveContent3} img={myData.thingsILoveImgURL3}></AboutMeContentCard>
      </div>
    </div>
  );
};

export default AboutMe;
