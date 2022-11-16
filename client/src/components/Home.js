import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import "./Home.css"

function Home({handleSearch, search, eventListing}) {
const history = useHistory()

  return (
    <div>
      <form className="search-bar">
        <input
        className="search-input"
        type="text"
        placeholder="enter keywords..."
        value={search}
        onChange={handleSearch}
        />
        <button className="search-btn" onClick={() => history.push("/events")}> 🔍 </button>
      </form>
      <img className="background-img" src="https://i.pinimg.com/originals/7b/5b/f1/7b5bf10350f46ccdd950ff3dfb59cb6e.jpg" ></img>
      <div id="logos">
        <a href="https://www.Facebook.com"></a>
          <img alt="Facebook" src="https://cdn-icons-png.flaticon.com/512/2111/2111392.png"></img>
        <a href="https://www.YouTube.com"></a>
          <img alt="YouTube" src="https://cdn-icons-png.flaticon.com/512/1384/1384028.png"></img>
        <a href="https://www.Instagram.com"></a>
          <img alt="Instagram" src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"></img>
        <a href="https://www.Twitter.com"></a>
          <img alt="Twitter" src="https://cdn-icons-png.flaticon.com/512/1384/1384033.png"></img>
        <a href="https://www.LinkedIn.com"></a>
          <img alt="LinkedIn" src="https://cdn-icons-png.flaticon.com/512/1384/1384030.png"></img>
      </div>
    </div>
  );
}
export default Home;
