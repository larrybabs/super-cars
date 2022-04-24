import React from "react";
import Navbar from "./components/navbar/Navbar";
import Options from "./components/Options/Options";
import Power from "./components/Power/Power";
import Speed from "./components/Speed/Speed";
import Handling from "./Handling/Handling";


function App() {
  return (
    < >
      <Navbar />
      <Power />
      <Speed />
      <Handling />
      <Options />
    </>
  );
}

export default App;
