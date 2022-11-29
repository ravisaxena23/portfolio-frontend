import { React, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import db from "../../firestore";

const Experience = () => {
  const [mySkills, setmySkills] = useState([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      let skills = collection(db, "skills");
      let dataSnapshot = await getDocs(skills);
      let data = []
      dataSnapshot.forEach((doc) => {
        data.push(doc.data())
      });
      setmySkills(data)


    };
    fetchInitialData();
  }, []);
  
  return (
    <div className="container padding-10" id="experience">
      <h1 className="page-heading"> Things I can Work With</h1>
      <div>
        {mySkills &&
          mySkills.map((skills) => {
            return (
              <div >
                <section className="chart-wrapper">
                  <ul className="chart-horizontal">
                    <li className="chart-bar" data-skill={skills.value}>
                      <span className="chart-bar-label">{skills.name}</span>{" "}
                      <span className="percentage">{skills.value}%</span>
                    </li>
                  </ul>
                </section>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Experience;
