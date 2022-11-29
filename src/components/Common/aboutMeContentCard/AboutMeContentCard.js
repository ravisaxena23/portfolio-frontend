import React from "react";

const AboutMeContentCard = (props) => {
  return (
    <div className="col s12 m4">
      <div className="card box-shadow my-data-card">
        <div className="card-content">
          <p className="card-text">{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeContentCard;
