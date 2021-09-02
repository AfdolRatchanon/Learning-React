import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//NOTE import Component จากภายนอก
import HelloComponent from "./components/HelloComponent.js";

//NOTE การสร้าง Component Fuction
function HelloComponentFuction() {
   return <h1>สวัสดี Component จาก Function ครับผม</h1>;
}
//NOTE การสร้าง Component Class
class HelloComponentClass extends React.Component {
   render() {
      return <h1>สวัสดี Component จาก Class ครับผม</h1>;
   }
}

//const data = <h1> สวัสดี React </h1>;

ReactDOM.render(<App />, document.getElementById("root"));

//REVIEW รูปแบบเดิม
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
