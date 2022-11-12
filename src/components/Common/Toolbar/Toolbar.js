export default function Toolbar(props) {
  return (
    <div id="toggle">
      <label className="toggle-1">
        <span className="toggle-1__toggle-wrap">
          <input
            type="checkbox"
            className="toggle-1__toggle"
            id="toggle-1"
            role="switch"
            name="toggle-1"
            onChange={() => props.toggleTheme("dark")}
          />
          <span className="toggle-1__fill"></span>
          <span className="toggle-1__icon">
            <span className="toggle-1__icon-part"></span>
            <span className="toggle-1__icon-part"></span>
            <span className="toggle-1__icon-part"></span>
            <span className="toggle-1__icon-part"></span>
            <span className="toggle-1__icon-part"></span>
            <span className="toggle-1__icon-part"></span>
            <span className="toggle-1__icon-part"></span>
            <span className="toggle-1__icon-part"></span>
            <span className="toggle-1__icon-part"></span>
          </span>
        </span>
      </label>
    </div>
  );
}
