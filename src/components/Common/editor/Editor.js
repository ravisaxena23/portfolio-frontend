import React from "react";
import ThreeDotImg from "../../../images/threedot.svg";

const Editor = ({ data }) => {
  const experience = data?.experience || "5+ years";
  const traits = data?.traits || [];
  const birthYear = data?.birthYear || 1999;

  return (
    <div className="editor-shell" aria-hidden="true">
      <div className="editor-window">
        <div className="editor-window__chrome">
          <img src={ThreeDotImg} alt="" width="52" height="12" />
          <span className="editor-window__title">systems.js</span>
        </div>
        <div className="editor-window__body">
          <p>
            <span className="ln">1</span>
            <span className="kw">class</span>{" "}
            <span className="id">AiEngineer</span> <span className="punct">{"{"}</span>
          </p>
          <p>
            <span className="ln">2</span>
            {"  "}
            <span className="fn">constructor</span>
            <span className="punct">() {"{"}</span>
          </p>
          <p>
            <span className="ln">3</span>
            {"    "}
            <span className="prop">this</span>
            <span className="punct">.</span>
            <span className="id">experience</span>
            <span className="punct"> = </span>
            <span className="str">"{experience}"</span>
            <span className="punct">;</span>
          </p>
          <p>
            <span className="ln">4</span>
            {"    "}
            <span className="prop">this</span>
            <span className="punct">.</span>
            <span className="id">traits</span>
            <span className="punct"> = [</span>
            {traits.map((trait, index) => (
              <span key={trait}>
                <span className="str">"{trait}"</span>
                {index < traits.length - 1 ? (
                  <span className="punct">, </span>
                ) : null}
              </span>
            ))}
            <span className="punct">];</span>
          </p>
          <p>
            <span className="ln">5</span>
            {"    "}
            <span className="prop">this</span>
            <span className="punct">.</span>
            <span className="id">focus</span>
            <span className="punct"> = </span>
            <span className="str">"AI systems & SaaS"</span>
            <span className="punct">;</span>
          </p>
          <p>
            <span className="ln">6</span>
            {"    "}
            <span className="prop">this</span>
            <span className="punct">.</span>
            <span className="id">age</span>
            <span className="punct"> = </span>
            <span className="kw">new</span> <span className="type">Date</span>
            <span className="punct">().</span>
            <span className="type">getFullYear</span>
            <span className="punct">() - </span>
            <span className="num">{birthYear}</span>
            <span className="punct">;</span>
          </p>
          <p>
            <span className="ln">7</span>
            {"  "}
            <span className="punct">{"}"}</span>
          </p>
          <p>
            <span className="ln">8</span>
            <span className="punct">{"}"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Editor;
