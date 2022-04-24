import React from "react";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Options from "./components/BMW/BMW";
import Power from "./components/Porche/Porche";
import Speed from "./components/Ferrari/Ferrari";
import Handling from "./components/Benz/Benz";


function App() {
  return (
    < >
      <Navbar />
      <Power />
      <Speed />
      <Handling />
      <Options />
      <Contact />
    </>
  );
}

export default App;
