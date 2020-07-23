import React from "react";
import "./Tabs.css";
function Tabs({ setSearchInput }) {
  return (
    <div className="tabs">
      <button
        className="big-button"
        name="computer"
        onClick={(event) => setSearchInput(event.target.name)}
      >
        Computers
      </button>
      <button
        className="big-button"
        name="Phones"
        onClick={(event) => setSearchInput(event.target.name)}
      >
        Phones
      </button>
      <button
        className="big-button"
        name="tablet"
        onClick={(event) => setSearchInput(event.target.name)}
      >
        Tablets
      </button>
      <button
        className="big-button"
        name="cameras"
        onClick={(event) => setSearchInput(event.target.name)}
      >
        Cameras
      </button>
    </div>
  );
}

export default Tabs;
