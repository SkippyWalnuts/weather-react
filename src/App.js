import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Walnuts-Weather</h1>
      <div className="card">
       <Weather defaultCity="London"/>
      </div>
      <Footer />
    </div>
  );
}

