//import logo from "./logo.svg";
import "./App.css";
//import React from "react";
import Transection from "./components/Transection";
import FormComponent from "./components/FormComponent";

//const Tital = () => <h1 style={{ color: "red", fontSize: "2rem", textAlign: "center" }}>แอพบัญชีรายรับ - รายจ่าย</h1>;
const Description = () => <p>บันทีกข้อมูลบัญชีแต่ละวันของคุณ</p>;

const design = { color: "red", textAlign: "center", fontSize: "2rem" };

function App() {
   return (
      //NOTE ถ้ามี element หลายบันทัดต้องมี root เช่น div section > article React.Fragment <>
      <div className="Container">
         <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
         <FormComponent />
         <Description />
         <Transection />
      </div>
   );
}

export default App;
