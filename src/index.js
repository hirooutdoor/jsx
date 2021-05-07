import React from "react";
import ReactDOM from "react-dom";

const fname = "Hirofumi";
const lname = "Maeyama";
const number = Math.floor(Math.random() * 10 + 1);

ReactDOM.render(
  <div>
    <h1>
      Hello, {fname} {lname}!
    </h1>
    <p>Your lucky number is {number}.</p>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
