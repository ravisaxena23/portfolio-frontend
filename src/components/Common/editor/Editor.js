import React from "react";
import ThreeDotImg from "../../../images/threedot.svg";

const Editor = (props) => {
  return (
    <div className="editor-class">
      <div className="row">
        <div className="card-class">
          <div className="card card-radius editor-card">
            <div className="editor-card-content">
              <img src={ThreeDotImg} alt="three-dots"></img>
              <p className="editor-var">
                <span className="editor-line-number">1</span>
                &nbsp;&nbsp;&nbsp;class{" "}
                <span className="editor-user-var">person</span>{" "}
                <span className="editor-bracket-color">&#123;</span>
              </p>
              <p className="editor-var">
                <span className="editor-line-number">2</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;constructor{" "}
                <span className="editor-bracket-color">( ) &#123;</span>
              </p>
              <p>
                <span className="editor-line-number">3</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="editor-property-color">this</span>
                <span className="editor-bracket-color">.</span>
                <span className="editor-user-var">experience</span>
                <span className="editor-bracket-color"> = </span>
                <span className="editor-user-string capitalize-class">
                  "{props.initialIntroduction.experience}"
                </span>
                <span className="editor-bracket-color">;</span>
              </p>
              <p>
                <span className="editor-line-number">4</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="editor-property-color">this</span>
                <span className="editor-bracket-color">.</span>
                <span className="editor-user-var">traits</span>
                <span className="editor-bracket-color"> = </span>
                <span className="editor-bracket-color">&#91; </span>
                {props?.initialIntroduction?.traits?.length > 0 ? (
                  props.initialIntroduction.traits.map((trait, index) => (
                    <span key={index}>
                      <span className="uppercase-class editor-user-string">
                        {trait}{" "}
                      </span>
                      {index !==
                      props?.initialIntroduction?.traits?.length - 1 ? (
                        <span className="editor-bracket-color">, </span>
                      ) : (
                        <span></span>
                      )}
                    </span>
                  ))
                ) : (
                  <span></span>
                )}
                <span className="editor-bracket-color">&#93;;</span>
              </p>
              <p>
                <span className="editor-line-number">5</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="editor-property-color">this</span>
                <span className="editor-bracket-color">.</span>
                <span className="editor-user-var">age</span>
                <span className="editor-bracket-color"> = </span>
                <span className="editor-var">new </span>
                <span className="editor-class-property">Date</span>
                <span className="editor-bracket-color">( ).</span>
                <span className="editor-class-property">getFullYear</span>
                <span className="editor-bracket-color">( ) - </span>
                <span className="editor-user-string">
                  {" "}
                  {props.initialIntroduction.birthYear}
                </span>
                <span className="editor-bracket-color">;</span>
              </p>
              <p>
                <span className="editor-line-number">6</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="editor-bracket-color">&#125;</span>
              </p>
              <p>
                <span className="editor-line-number">7</span>&nbsp;&nbsp;
                <span className="editor-bracket-color">&#125;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
