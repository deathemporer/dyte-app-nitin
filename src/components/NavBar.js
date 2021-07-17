import { React, useState } from "react";
import "./NavBar.css";

const NavBar = (props) => {
  const [index, setIndex] = useState(0);
  const fileSelector = (event) => {
    props.onSelect(event.target.value);
    setIndex(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="navbar">
      <h2>File Explorer</h2>
      <div className="menu-items">
        <button className={`btn ${index==0? 'active':''}`} value="0" onClick={fileSelector}>
          index.html
        </button>
        <button className={`btn ${index==1? 'active':''}`} value="1" onClick={fileSelector}>
          index.css
        </button>
        <button className={`btn ${index==2? 'active':''}`} value="2" onClick={fileSelector}>
          index.js
        </button>
      </div>
    </div>
  );
};

export default NavBar;
