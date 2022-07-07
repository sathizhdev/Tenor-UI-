import React, { useState } from "react";
import "./Hero.css";
import Trending from "./Trending.js";
import Featured from "./Featured.js";
import SerachResult from "./SerachResult.js";

function Hero() {
  const [input, setInput] = useState("");

  const searchItems = (e) => {
    if (e.key === "Enter") {
      setInput(e.target.value);
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="main">
      <div className="logo">
        <img
          src="https://tenor.com/assets/img/tenor-logo.svg"
          onClick={refreshPage}
          width="80"
          height="22"
          alt="logo"
        />
      </div>

      <div className="topbar">
        <input
          type="search"
          placeholder="Serach for GIF's and Stickers"
          //onChange={(e) => searchItems(e.target.value)}
          onKeyPress={searchItems}
        />
      </div>
      {input.length === 0 ? (
        <>
          {" "}
          <Trending />
          <Featured />{" "}
        </>
      ) : (
        <SerachResult serachterm={input} />
      )}
    </div>
  );
}

export default Hero;
